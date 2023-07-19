package com.codingrecipe.board.service;

import com.codingrecipe.board.entity.Board;

import java.util.List;
import java.util.Optional;

public interface BoardService {

    public void save(Board board);

    public Optional<Board> findById(Long id);

    public List<Board> findAll();

    public void delete(String postId);

    public List<Board> findByMemberName(String name);
}