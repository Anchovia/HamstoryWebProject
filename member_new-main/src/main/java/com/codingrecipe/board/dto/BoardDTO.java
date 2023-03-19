package com.codingrecipe.board.dto;

import lombok.*;

import java.time.LocalDateTime;
import java.util.function.BiPredicate;

//DTO(Data Transfer Object)
@Getter   // get 메소드를 자동으로 만들어줌
@Setter   // set 메소드를 자동으로 만들어줌
@ToString  // 필드값 확인할 때 사용
@NoArgsConstructor // 기본 생성자
@AllArgsConstructor // 모든 필드를 매개변수로 하는 생성자

public class BoardDTO {
    private Long id;
    private String boardWriter;
    private String boardTitle;
    private String boardContents;
    private int boardHits;  // 조회수
    private LocalDateTime boardCreatedTime;  // 글 작성시간
    //private LocalDateTime boardUpdatedTime;  // 글 수정시간

    //public static BoardDTO toBoardDTO(BoardEntity boardEntity) {  // dto를 entity로 변환하는
    //   BoardDTO boardDTO = new BoardDTO();
        //boardDTO
    //}
}
