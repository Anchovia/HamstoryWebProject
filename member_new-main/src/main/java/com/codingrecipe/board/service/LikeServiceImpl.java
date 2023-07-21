package com.codingrecipe.board.service;

import com.codingrecipe.board.entity.Like;
import com.codingrecipe.board.repository.LikeRepositoryImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LikeServiceImpl implements LikeService {

    @Autowired
    LikeRepositoryImpl likeRepository;

    public static final String COLLECTION_NAME = "LIKE";

    @Override
    public void update(Like like) {
        try{
            likeRepository.update(like);
        } catch (Exception e){
            e.printStackTrace();
        }
    }
}
