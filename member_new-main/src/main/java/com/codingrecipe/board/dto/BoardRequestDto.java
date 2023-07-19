package com.codingrecipe.board.dto;

// 사용자가 작성해야하는 것들

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class BoardRequestDto {
    private String boardTitle;
    private String boardContents;
}
