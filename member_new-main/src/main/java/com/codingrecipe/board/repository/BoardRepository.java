package com.codingrecipe.board.repository;

import com.codingrecipe.board.entity.Board;

import java.util.List;
import java.util.Optional;

public interface BoardRepository {

    public void save(Board board);

    public void delete(String id);

    public Optional<Board> findById(Long id);

    public List<Board> findAll();
}
