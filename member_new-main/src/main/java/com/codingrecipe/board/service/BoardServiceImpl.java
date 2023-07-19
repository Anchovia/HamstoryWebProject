package com.codingrecipe.board.service;

import com.codingrecipe.board.dto.PostId;
import com.codingrecipe.board.entity.Board;
import com.codingrecipe.board.repository.BoardRepositoryImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BoardServiceImpl implements BoardService{

    @Autowired
    BoardRepositoryImpl boardRepository;

    public static final String COLLECTION_NAME = "BOARD";

    @Override
    public void save(Board board) {
        try{
            boardRepository.save(board);
        } catch (Exception e){
            e.printStackTrace();
        }
    }

    @Override
    public void delete(String postId){
        try{
            boardRepository.delete(postId);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public Optional<Board> findById(Long id) {
        try{
            return boardRepository.findById(id);
        } catch (Exception e){
            e.printStackTrace();
        }
        return Optional.empty();
    }

    @Override
    public List<Board> findAll() {
        try{
            return boardRepository.findAll();
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public List<Board> findByMemberName(String name){
        try {
            return boardRepository.findByMemberName(name);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}