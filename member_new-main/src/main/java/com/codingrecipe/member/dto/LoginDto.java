package com.codingrecipe.member.dto;

// 사용자가 입력한 정보를 받아오는 곳
public class LoginDto {
    String email;
    String pw;

    public void setEmail(String email){
        this.email = email;
    }

    public String getEmail(){
        return email;
    }

    public void setPw(String pw){
        this.pw = pw;
    }

    public String getPw(){
        return pw;
    }
}
