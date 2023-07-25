package com.codingrecipe.member.service;

import com.codingrecipe.member.entity.Member;
import com.codingrecipe.member.dto.LoginDto;
import com.codingrecipe.jwt.JwtTokenProvider;
import com.codingrecipe.member.repository.MemberRepositoryImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Optional;

@Service
public class MemberServiceImpl implements MemberService{

    @Autowired
    MemberRepositoryImpl memberRepository;

    private final JwtTokenProvider jwtTokenProvider;
    public static final String COLLECTION_NAME = "MEMBER";

    public MemberServiceImpl(JwtTokenProvider jwtTokenProvider){
        this.jwtTokenProvider = jwtTokenProvider;
    }

    //데이터베이스에 member 삽입(save)
    @Override
    public String save(Member member) {
        try{
            //중복 이메일인지 체크
            if(!validateDuplicateMember(member.getMemberEmail(), member.getMemberName())){
                return null;
            }

            memberRepository.save(member);

            return createToken(member);
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    //이메일과 닉네임 중복 체크 함수
    @Override
    public boolean validateDuplicateMember(String email, String name) {
        try{
            Optional<Member> emailChecker = memberRepository.findByEmail(email);
            if(emailChecker.isPresent()){
               return false;//이메일 중복
            }

            Optional<Member> nameChecker = memberRepository.findByName(name);
            if(nameChecker.isPresent()){
                return false;//닉네임 중복
            }

            return true;//사용가능
        } catch (Exception e){
            e.printStackTrace();
        }
        return false;
    }

    //email로 멤버 정보 조회
    @Override
    public Optional<Member> getMemberDetail(String email) {
        try{
            return memberRepository.findByEmail(email);
        } catch (Exception e){
            e.printStackTrace();
        }
        return Optional.empty();
    }

    //로그인
    @Override
    public String login(LoginDto form) {
        try{
            Optional<Member> memberOptional = memberRepository.findByEmail(form.getEmail());
            if(memberOptional.isPresent()){
                Member member = memberOptional.get();
                if(member.getMemberPassword().equals(form.getPw())) {
                    return createToken(member);
                }
            }
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    //이메일로 아이디 검색
    @Override
    public String getIdByEmail(String email) {
        try{
            return memberRepository.getIdByEmail(email);
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    //회원 탈퇴 만들어봤는데 아직 테스트는 안해봤다
    @Override
    public void deleteByEmail(String email) {
        try{
            memberRepository.deleteByEmail(email);
        } catch (Exception e){
            e.printStackTrace();
        }
    }

    @Override
    public void updatePassword(String email, String password){
        try {
            memberRepository.updatePassword(email, password);
        } catch (Exception e){
            e.printStackTrace();
        }
    }

//    public void updateImage(String email, MultipartFile img) {
//        try {
//            memberRepository.updateImage(email, img);
//        } catch (Exception e){
//            e.printStackTrace();
//        }
//    }

    //이메일로 토큰 생성 후 리턴
    @Override
    public String createToken(Member member){
        return jwtTokenProvider.createToken(member);
    }

    //유효한 토큰인지 확인
    @Override
    public boolean validateToken(String token){
        return jwtTokenProvider.validateToken(token);
    }
}