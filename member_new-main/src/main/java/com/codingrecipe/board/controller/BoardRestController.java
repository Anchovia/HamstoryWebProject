package com.codingrecipe.board.controller;

import com.codingrecipe.board.dto.BoardDTO;
import com.codingrecipe.board.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
public class BoardRestController {

    @Autowired
    BoardService boardService;

    @GetMapping("/board/findAll")
    public ResponseEntity<List<BoardDTO>> findAll() throws ExecutionException, InterruptedException {
        List<BoardDTO> list = boardService.findAll();

        return ResponseEntity.ok().body(list);
    }
}
