package com.codingrecipe.member.entity;

import com.codingrecipe.member.dto.SignUpDto;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Member {

    private String memberEmail;
    private String memberPassword;
    private String memberName;

    public Member(SignUpDto signUpDto){
        this.memberEmail = signUpDto.getEmail();
        this.memberPassword = signUpDto.getPw();
        this.memberName = signUpDto.getNickName();
    }
}
