package com.codingrecipe.member.controller;

import com.codingrecipe.member.dto.MemberDTO;
import com.codingrecipe.member.form.LoginForm;
import com.codingrecipe.member.form.MemberForm;
import com.codingrecipe.member.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

//RestController: 그냥 컨트롤러는 리턴했을 때 여기서 지정해준 경로로 이동하는데,
//rest는 여기서 지정해준 경로로 이동하는게 아니라 프론트로 데이터를 리턴함
@RestController
public class MemberController {

    @Autowired
    MemberService memberService;

    //회원가입
    //회원가입 정보를 프론트에서 받아와서 토큰발급
    @PostMapping("/members/new")
    public String create(@RequestBody MemberForm form) throws Exception{
        MemberDTO member = new MemberDTO();
        member.setMemberName(form.getNickName());  // 받아온 정보를 각 변수를 저장
        member.setMemberEmail(form.getEmail());
        member.setMemberPassword(form.getPw());

        //memberService 호출해서 member를 데이터베이스에 저장하고 토큰을 받아옴
        //회원가입 실패하면 token에는 null이 저장됨
        //이메일과 닉네임이 중복되면 null(아직 이메일 중복밖에 없음)
        String token = memberService.insertMember(member);

        if(token != null){
            System.out.println(">>> created: " + member.getMemberEmail());
            System.out.println(">>> token: " + token);
        }else{
            System.out.println(">>> create failed");
        }

        return token;
        //토큰 리턴
    }

    //로그인
    //프론트에서 로그인 정보를 보내면 그 정보를 비교해서 맞으면 토큰발급, 아니면 널
    @PostMapping("/members/login")
    public String login(@RequestBody LoginForm form) throws Exception{
        //memberService 호출해서 로그인
        //실패하면 token = null
        String token = memberService.login(form);  // memberService 부분이 파이어베이스

        if(token != null){//로그인 성공
            System.out.println(">>> login success: " + form.getEmail());
            System.out.println(">>> token: " + token);
            if(!memberService.validateToken(token)){//유효하지 않은 토큰
                System.out.println(">>> invalid token");
            }else{//유효한 토큰
                System.out.println(">>> valid token");
            }
            return token;
        }else{//로그인 실패
            System.out.println(">>> login failed");
            return null;
        }
    }

    //멤버 정보 요청
    //여기로 오기 전에 인터셉터(BearerAuthInterceptor) 먼저 실행됨
    //프론트에서 토큰을 보내면 그 토큰을 해석해서 이메일, 닉네임, 페스워드를 프론트에 보내줌
    @GetMapping("/info")
    public ResponseEntity<MemberDTO> getMemberFromToken(HttpServletRequest request){
        Map<String, Object> claims = (Map<String, Object>) request.getAttribute("claims");

        MemberDTO member = new MemberDTO();
        member.setMemberEmail((String) claims.get("email"));
        member.setMemberName((String) claims.get("nickName"));
        member.setMemberPassword((String) claims.get("pw"));

        System.out.println(">>> returned data: " + member.getMemberEmail());  // 디버깅용

        return ResponseEntity.ok().body(member);//member의 내용을 json형태로 반환(프론트에 보낼 때)
    }
}
