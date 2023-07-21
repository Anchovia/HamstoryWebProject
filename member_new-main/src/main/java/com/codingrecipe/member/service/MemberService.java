package com.codingrecipe.member.service;

import com.codingrecipe.member.dto.LoginDto;
import com.codingrecipe.member.entity.Member;

import java.util.Optional;

public interface MemberService {
    public String save(Member member); // 웅웅 알게떠

    public boolean validateDuplicateMember(String email, String name);  // 아하

    public Optional<Member> getMemberDetail(String email);  // 그러쿠나

    public String login(LoginDto form);  // 함수많다

    public String getIdByEmail(String email);

    public void deleteByEmail(String email);  // 이거는 지우는 함수야~

    public String createToken(Member member);  //함수야~

    public boolean validateToken(String token);  // 이건머지?
}
