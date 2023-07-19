package com.codingrecipe.board.service;

import com.codingrecipe.board.entity.Comment;
import com.codingrecipe.board.repository.CommentRepositoryImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service

public class CommentServiceImpl implements CommentService{

    @Autowired
    CommentRepositoryImpl commentRepository;

    public static final String COLLECTION_NAME = "COMMENT";

    @Override
    public void save(Comment comment) {
        try{
            commentRepository.save(comment);
        } catch (Exception e){
            e.printStackTrace();
        }
    }

    @Override
    public void delete(String id){
        try{
            commentRepository.delete(id);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public List<Comment> findByBoardId(Long boardId) {
        try{
            return commentRepository.findByBoardId(boardId);
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public List<Comment> findAll() {
        try{
            return commentRepository.findAll();
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }
}
