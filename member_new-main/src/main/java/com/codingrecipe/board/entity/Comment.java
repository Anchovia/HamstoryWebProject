package com.codingrecipe.board.entity;

import lombok.*;

@Getter   // get 메소드를 자동으로 만들어줌
@Setter   // set 메소드를 자동으로 만들어줌
@ToString  // 필드값 확인할 때 사용
public class Comment {
    private Long commentId;
    private Long boardId;
    private String writer;
    private String contents;
    private int likes;
    private String createdTime;

}
