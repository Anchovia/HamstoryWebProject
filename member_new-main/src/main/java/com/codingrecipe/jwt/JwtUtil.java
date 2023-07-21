package com.codingrecipe.jwt;

import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@Component
public class JwtUtil {

    private static AuthorizationExtractor authExtractor;
    private static JwtTokenProvider jwtTokenProvider;

    public JwtUtil(AuthorizationExtractor authExtractor, JwtTokenProvider jwtTokenProvider){
        JwtUtil.authExtractor = authExtractor;
        JwtUtil.jwtTokenProvider = jwtTokenProvider;
    }

    public static String getEmail(HttpServletRequest request){

        //토큰 추출
        String token = authExtractor.extract(request, "Bearer");

        if(StringUtils.isEmpty(token)){
            throw new IllegalArgumentException(">>> token is null");
        }

        //유효성 검사
        if(!jwtTokenProvider.validateToken(token)){
            throw new IllegalArgumentException(">>> invalid token");
        }

        //토큰에서 데이터 추출
        Map<String, Object> claims = jwtTokenProvider.getSubject(token);

        return (String) claims.get("email");
    }

    public static String getName(HttpServletRequest request){
        //토큰 추출
        String token = authExtractor.extract(request, "Bearer");

        if(StringUtils.isEmpty(token)){
            throw new IllegalArgumentException(">>> token is null");
        }

        //유효성 검사
        if(!jwtTokenProvider.validateToken(token)){
            throw new IllegalArgumentException(">>> invalid token");
        }

        //토큰에서 데이터 추출
        Map<String, Object> claims = jwtTokenProvider.getSubject(token);

        return (String) claims.get("nickName");
    }
}
