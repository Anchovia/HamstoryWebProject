package com.codingrecipe.board.repository;

import com.codingrecipe.board.entity.Comment;

import java.util.List;

public interface CommentRepository {

    public void save(Comment comment);

    public void delete(String id);

    public List<Comment> findByBoardId(Long boardId);

    public List<Comment> findAll();
}
