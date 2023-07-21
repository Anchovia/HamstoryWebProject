package com.codingrecipe.board.controller;

import com.codingrecipe.board.entity.Comment;
import com.codingrecipe.board.dto.CommentRequestDto;
import com.codingrecipe.board.service.CommentServiceImpl;
import com.codingrecipe.jwt.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/comments")
public class CommentController {

    @Autowired
    CommentServiceImpl commentService;

    @PostMapping("")  // 프론트에서 댓글 내용을 받아오면 작성자, 댓글 쓴 글, 작성시간, 댓글 좋아요 수, 내용을 설정해서 반환해줌
    public ResponseEntity<?> createComment(@RequestBody CommentRequestDto commentForm, HttpServletRequest request) {
        try{
            String name = JwtUtil.getName(request);

            String date = new SimpleDateFormat("yyyy/MM/dd hh:mm").format(new Date(System.currentTimeMillis()));

            Comment comment = new Comment();
            comment.setWriter(name);
            comment.setCreatedTime(date);
            comment.setLikes(0);
            comment.setBoardId(Long.valueOf(commentForm.getBoardId()));
            comment.setContents(commentForm.getCommentContents());
            commentService.save(comment);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    //사용자 인증 필요
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteComment(@PathVariable("id") String id) {
        try{
            commentService.delete(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch(Exception e){
            e.printStackTrace();
        }
        return null;
    }

    @GetMapping("")   //  프론트로 해당 게시글의 댓글 리스트 보냄
    public ResponseEntity<List<Comment>> findComments(@RequestParam("boardId") Long boardId) {
        try{
            List<Comment> list = commentService.findByBoardId(boardId);

            return ResponseEntity.ok().body(list);
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Comment>> findAll() {
        try{
            List<Comment> list = commentService.findAll();

            return ResponseEntity.ok().body(list);
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }
}
