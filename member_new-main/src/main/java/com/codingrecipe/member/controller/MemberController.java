package com.codingrecipe.member.controller;

import com.codingrecipe.jwt.JwtUtil;
import com.codingrecipe.member.entity.Member;
import com.codingrecipe.member.dto.LoginDto;
import com.codingrecipe.member.dto.SignUpDto;
import com.codingrecipe.member.service.MemberServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.util.Optional;

@RestController
@RequestMapping("/members")
public class MemberController {

    @Autowired
    MemberServiceImpl memberService;

    //회원가입
    //회원가입 정보를 프론트에서 받아와서 토큰발급
    @PostMapping("/create")
    public String create(@RequestBody SignUpDto signUpDto) {
        try{
            Member member = new Member(signUpDto);

            //memberService 호출해서 member를 데이터베이스에 저장하고 토큰을 받아옴
            //회원가입 실패하면 token에는 null이 저장됨
            String token = memberService.save(member);

            if(token != null){
                System.out.println(">>> created: " + member.getMemberEmail());
                System.out.println(">>> token: " + token);
            }else{
                System.out.println(">>> create failed");
            }

            return token;
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    //로그인
    //프론트에서 로그인 정보를 보내면 그 정보를 비교해서 맞으면 토큰발급, 아니면 널
    @PostMapping("/login")
    public String login(@RequestBody LoginDto loginDto) {
        try{

            String token = memberService.login(loginDto);  // memberService 부분이 파이어베이스

            //멤버 정보가 존재하지 않음
            if(token == null){
                System.out.println(">>> login failed");
                return null;
            }

            //유효하지 않은 토큰
            if(!memberService.validateToken(token)) {
                System.out.println(">>> invalid token");
                return null;
            }

            System.out.println(">>> login success: " + loginDto.getEmail());
            System.out.println(">>> token: " + token);

            return token;
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    //멤버 정보 요청
    //여기로 오기 전에 인터셉터(BearerAuthInterceptor) 먼저 실행됨
    //프론트에서 토큰을 보내면 그 토큰을 해석해서 이메일, 닉네임, 페스워드를 프론트에 보내줌
    @GetMapping("")
    public ResponseEntity<Member> getMember(HttpServletRequest request){
        try{
            String email = JwtUtil.getEmail(request);

            Optional<Member> memberOptional= memberService.getMemberDetail(email);

            if(memberOptional.isPresent()){
                System.out.println(">>> requested member: " + email);
                return ResponseEntity.ok().body(memberOptional.get());
            }
        } catch (Exception e){
            e.printStackTrace();
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
    }

    /*
    //cascade??
    @DeleteMapping("")
    public void deleteMember(HttpServletRequest request){
        try {
            String email = JwtUtil.getEmail(request);
            memberService.deleteByEmail(email);
        } catch (Exception e){
            e.printStackTrace();
        }
    }
     */

    @PutMapping("")
    public ResponseEntity<?> changePassword(HttpServletRequest request, @RequestBody String password){
        try {
            String email = JwtUtil.getEmail(request);
            memberService.updatePassword(email, password);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }

//    @PutMapping("/img")
//    public void changeImage(HttpServletRequest request, @RequestPart(value = "img", required = false) MultipartFile img){
//        try {
//            String email = JwtUtil.getEmail(request);
//            memberService.updateImage(email, img);
//        } catch (Exception e){
//            e.printStackTrace();
//        }
//    }
}
