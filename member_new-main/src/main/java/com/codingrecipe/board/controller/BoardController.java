package com.codingrecipe.board.controller;

import com.codingrecipe.board.dto.BoardDTO;
import com.codingrecipe.board.form.BoardForm;
import com.codingrecipe.board.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;


@Controller
@RequiredArgsConstructor
public class BoardController {
    private final BoardService boardService;

    @GetMapping("/board")  // 보낼 때
    public String saveForm() {
        return "boardSave";
    }
    @PostMapping("/board/save")  // 받아올 때
    public String save(@ModelAttribute BoardForm boardForm, HttpServletRequest request) throws ExecutionException, InterruptedException {
        Map<String, Object> claims = (Map<String, Object>) request.getAttribute("claims");

        BoardDTO boardDTO = new BoardDTO();
        boardDTO.setBoardWriter((String) claims.get("nickName"));
        boardDTO.setBoardTitle(boardForm.getBoardTitle());
        boardDTO.setBoardContents(boardForm.getBoardContents());
        boardDTO.setBoardCreatedTime(LocalDateTime.now());
        boardDTO.setBoardHits(0);
        boardService.save(boardDTO);

        return "index";
    }

    @GetMapping("/")

    public String findAll(Model model) throws ExecutionException, InterruptedException {
        // DB에서 전체 게시글 데이터를 가져와서 list.html에 보여줌
        List<BoardDTO> boardDTOList = boardService.findAll();
        model.addAttribute("boardList", boardDTOList);
        return "List";
    }
}
