package com.codingrecipe.board.service;

import com.codingrecipe.board.entity.Comment;

import java.util.List;

public interface CommentService {

    public void save(Comment comment);

    public void delete(String id);

    public List<Comment> findByBoardId(Long boardId);

    public List<Comment> findAll();

}
