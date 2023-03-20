package com.codingrecipe.board.controller;

import com.codingrecipe.board.dto.BoardDTO;
import com.codingrecipe.board.form.BoardForm;
import com.codingrecipe.board.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.sql.Timestamp;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;

@RestController
public class BoardRestController {

    @Autowired
    BoardService boardService;

    @GetMapping("/board/findAll")   //  프론트로 모든 게시글 리스트 보냄
    public ResponseEntity<List<BoardDTO>> findAll() throws ExecutionException, InterruptedException {
        List<BoardDTO> list = boardService.findAll();

        return ResponseEntity.ok().body(list);
    }

    @PostMapping("/board/save") //  프론트에서 작성할 게시글의 정보와 토큰을 보내주면 게시글을 저장
    public boolean save(@RequestBody BoardForm boardForm, HttpServletRequest request) throws ExecutionException, InterruptedException {
        Map<String, Object> claims = (Map<String, Object>) request.getAttribute("claims");
        Timestamp now = new Timestamp(System.currentTimeMillis());

        BoardDTO boardDTO = new BoardDTO();
        boardDTO.setTitle(boardForm.getBoardTitle());
        boardDTO.setWriter((String) claims.get("nickName"));
        boardDTO.setCreatedTime(now);
        boardDTO.setHits(0);
        boardDTO.setLikes(0);
        boardDTO.setContents(boardForm.getBoardContents());
        boardDTO.setCategory("자유게시판");
        boardService.save(boardDTO);

        return true;
    }

    @PostMapping("/board/findOne")  //  프론트에서 게시글의 아이디를 보내주면 그 아이디를 가진 게시글 찾아서 정보 리턴
    public BoardDTO findOne(@RequestBody Long id) throws ExecutionException, InterruptedException {

        return boardService.findOne(id);
    }
}
