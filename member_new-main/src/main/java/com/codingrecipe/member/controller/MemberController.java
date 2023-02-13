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
import javax.servlet.http.HttpSession;

@RestController
public class MemberController {

    @Autowired
    MemberService memberService;

    @PostMapping("/members/new")
    public boolean create(@RequestBody MemberForm form) throws Exception{
        MemberDTO member = new MemberDTO();
        member.setMemberName(form.getNickName());
        member.setMemberEmail(form.getEmail());
        member.setMemberPassword(form.getPw());

        return memberService.insertMember(member);
    }

    @PostMapping("/members/login")
    public boolean login(@RequestBody LoginForm form, HttpSession session) throws Exception{
        MemberDTO member = memberService.login(form);

        //로그인 성공
        if(member != null){
            session.setAttribute("member", member);
            //session.setAttribute("loginEmail", member.getMemberEmail());
            MemberDTO loginMember = (MemberDTO) session.getAttribute("member");
            System.out.println(">>> login success " + loginMember.getMemberEmail());
            return true;
        }else{
            System.out.println(">>> login fail");
            return false;
        }
    }

    @GetMapping("/getMemberDTO")
    public ResponseEntity<MemberDTO> getMemberDTO(HttpServletRequest request){
        HttpSession session = request.getSession();
        MemberDTO member = (MemberDTO) session.getAttribute("member");

        return ResponseEntity.ok(member);
    }
}
