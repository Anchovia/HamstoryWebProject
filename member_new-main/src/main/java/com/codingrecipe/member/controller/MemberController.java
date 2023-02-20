package com.codingrecipe.member.controller;

import com.codingrecipe.member.dto.MemberDTO;
import com.codingrecipe.member.form.LoginForm;
import com.codingrecipe.member.form.MemberForm;
import com.codingrecipe.member.service.MemberService;
import com.google.firebase.remoteconfig.internal.TemplateResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@RestController
public class MemberController {

    @Autowired
    MemberService memberService;

    @PostMapping("/members/new")
    public String create(@RequestBody MemberForm form) throws Exception{
        MemberDTO member = new MemberDTO();
        member.setMemberName(form.getNickName());
        member.setMemberEmail(form.getEmail());
        member.setMemberPassword(form.getPw());

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

    @PostMapping("/members/login")
    public String login(@RequestBody LoginForm form) throws Exception{
        String token = memberService.login(form);

        //로그인 성공
        if(token != null){
            System.out.println(">>> login success: " + form.getEmail());
            System.out.println(">>> token: " + token);
            if(!memberService.validateToken(token)){
                System.out.println(">>> invalid token");
            }else{
                System.out.println(">>> valid token");
            }
            return token;
        }else{
            System.out.println(">>> login failed");
            return null;
        }
    }

    @GetMapping("/info")
    public ResponseEntity<MemberDTO> getMemberFromToken(HttpServletRequest request){
        Map<String, Object> claims = (Map<String, Object>) request.getAttribute("claims");

        MemberDTO member = new MemberDTO();
        member.setMemberEmail((String) claims.get("email"));
        member.setMemberName((String) claims.get("nickName"));
        member.setMemberPassword((String) claims.get("pw"));

        System.out.println(">>> returned data: " + member.getMemberEmail());

        return ResponseEntity.ok().body(member);
    }
}
