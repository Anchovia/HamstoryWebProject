package com.codingrecipe.member.jwt;

import org.apache.http.HttpHeaders;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.thymeleaf.util.StringUtils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.Map;

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
        System.out.println(">>> interceptor.preHandle called");
        String token = authExtractor.extract(request, "Bearer");
        System.out.println(">>> extracted token: " + token);

        if(StringUtils.isEmpty(token)){
            return true;
        }

        if(!jwtTokenProvider.validateToken(token)){
            throw new IllegalArgumentException("invalid token");
        }

        Map<String, Object> claims = jwtTokenProvider.getSubject(token);
        //String id = jwtTokenProvider.getSubject(token);
        request.setAttribute("claims", claims);
        return true;
    }
}
