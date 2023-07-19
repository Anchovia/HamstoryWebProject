package com.codingrecipe.board.entity;

import lombok.*;

//DTO(Data Transfer Object)
@Getter   // get 메소드를 자동으로 만들어줌
@Setter   // set 메소드를 자동으로 만들어줌
@ToString  // 필드값 확인할 때 사용
@NoArgsConstructor // 기본 생성자
@AllArgsConstructor // 모든 필드를 매개변수로 하는 생성자

public class Board {
    private Long id;
    private String title;
    private String writer;
    private String createdTime;  // 글 작성시간
    private Long hits;  // 조회수
    private Long likes; // 좋아요수
    private String contents;
    private String category; //카테고리
    //private LocalDateTime boardUpdatedTime;  // 글 수정시간
}
