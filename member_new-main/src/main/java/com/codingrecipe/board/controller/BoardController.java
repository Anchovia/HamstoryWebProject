package com.codingrecipe.board.controller;

import com.codingrecipe.board.entity.Board;
import com.codingrecipe.board.dto.BoardRequestDto;
import com.codingrecipe.board.service.BoardServiceImpl;
import com.codingrecipe.jwt.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/boards")
public class BoardController {

    @Autowired
    BoardServiceImpl boardService;

    @PostMapping("") //  프론트에서 작성할 게시글의 정보와 토큰을 보내주면 게시글을 저장
    public ResponseEntity<?> save(@RequestBody BoardRequestDto boardForm, HttpServletRequest request) {
        try{
            //JwtUtil에서 유효성 검사 후 닉네임 받아옴
            String name = JwtUtil.getName(request);

            String date = new SimpleDateFormat("yyyy/MM/dd hh:mm").format(new Date(System.currentTimeMillis()));

            Board board = new Board();
            board.setTitle(boardForm.getBoardTitle());
            board.setWriter(name);
            board.setCreatedTime(date);
            board.setHits(0L);
            board.setLikes(0L);
            board.setContents(boardForm.getBoardContents());
            board.setCategory("자유게시판");
            boardService.save(board);

            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    //사용자 인증 필요
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") String id) {
        try{
            boardService.delete(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch(Exception e){
            e.printStackTrace();
        }
        return null;
    }

    @GetMapping("")   //  프론트로 모든 게시글 리스트 보냄
    public ResponseEntity<List<Board>> findAll() {
        try{
            List<Board> list = boardService.findAll();

            return ResponseEntity.ok().body(list);
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    @GetMapping("/{id}")  //  프론트에서 게시글의 아이디를 보내주면 그 아이디를 가진 게시글 찾아서 정보 리턴
    public ResponseEntity<Board> findOne(@PathVariable("id") Long id) {
        try{
            Optional<Board> boardOptional = boardService.findById(id);
            //boardOptional에 값이 있으면 BOARD로 바꿔서 리턴, 없으면 null 리턴
            return boardOptional.map(board -> ResponseEntity.ok().body(board)).orElseGet(() -> ResponseEntity.badRequest().body(null));
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    @GetMapping("/my")
    public ResponseEntity<List<Board>> findMyPosts(HttpServletRequest request){
        try {
            String name = JwtUtil.getName(request);
            return ResponseEntity.ok().body(boardService.findByMemberName(name));
        } catch (Exception e){
            e.printStackTrace();
        }
        return ResponseEntity.badRequest().body(null);
    }
}
