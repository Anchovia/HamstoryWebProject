package com.codingrecipe.board.entity;

import lombok.*;

@Getter   // get 메소드를 자동으로 만들어줌
@Setter   // set 메소드를 자동으로 만들어줌
@ToString  // 필드값 확인할 때 사용
@NoArgsConstructor // 기본 생성자
@AllArgsConstructor // 모든 필드를 매개변수로 하는 생성자
public class Like {
    private Long likeId;
    private Long boardId;
    private String memberNickname;
}
