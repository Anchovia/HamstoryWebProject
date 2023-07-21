package com.codingrecipe.member.repository;

import com.codingrecipe.member.entity.Member;

import java.util.Optional;

public interface MemberRepository {
    public void save(Member member);

    public Optional<Member> findByEmail(String email);

    public Optional<Member> findByName(String name);

    public String getIdByEmail(String email);

    public void deleteByEmail(String email);
}
