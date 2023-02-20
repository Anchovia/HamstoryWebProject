package com.codingrecipe.member.jwt;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.thymeleaf.util.StringUtils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@Component
public class BearerAuthInterceptor implements HandlerInterceptor {
    private AuthorizationExtractor authExtractor;
    private JwtTokenProvider jwtTokenProvider;

    public BearerAuthInterceptor(AuthorizationExtractor authExtractor, JwtTokenProvider jwtTokenProvider){
        this.authExtractor = authExtractor;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler){
        System.out.println(">>> interceptor.preHandle 호출");
        //String token = authExtractor.extract(request, "Bearer");
        HttpSession session = request.getSession();
        String token = (String) session.getAttribute("token");

        if(StringUtils.isEmpty(token)){
            return true;
        }

        if(!jwtTokenProvider.validateToken(token)){
            throw new IllegalArgumentException("유효하지 않은 토큰");
        }

        String id = jwtTokenProvider.getSubject(token);
        request.setAttribute("id", id);
        return true;
    }
}
