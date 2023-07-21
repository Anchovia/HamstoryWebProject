package com.codingrecipe.board.controller;

import com.codingrecipe.board.entity.Like;
import com.codingrecipe.board.service.LikeServiceImpl;
import com.codingrecipe.jwt.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/likes")
public class LikeController {

    @Autowired
    LikeServiceImpl likeService;

    @RequestMapping("")
    public ResponseEntity<?> like(@RequestParam("boardId") Long boardId , HttpServletRequest request) {
        try{
            String name = JwtUtil.getName(request);

            Like likeDTO = new Like();
            likeDTO.setMemberNickname(name);
            likeDTO.setBoardId(boardId);
            likeService.update(likeDTO);

            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}
