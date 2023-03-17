package com.codingrecipe.member.jwt;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.thymeleaf.util.StringUtils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

//인터셉터
//특정 경로로 요청이 들어오면 컨트롤러보다 인터셉터가 먼저 실행된다
//특정 경로는 WebMvcConfig에서 설정 가능
//여기에서는 /info로 요청이 들어왔을 때 인터셉터가 실행되게 햇다
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
        String token = authExtractor.extract(request, "Bearer");//토큰 추출
        System.out.println(">>> extracted token: " + token);//토큰이 제대로 추출됐는지 확인하려고 프린트 썼다

        if(StringUtils.isEmpty(token)){
            return true;
        }

        //유효하지 않은 토큰인 경우
        if(!jwtTokenProvider.validateToken(token)){
            throw new IllegalArgumentException("invalid token");
        }

        Map<String, Object> claims = jwtTokenProvider.getSubject(token);//토큰에서 데이터를 추출
        request.setAttribute("claims", claims);//토큰에서 추출한 데이터를 request에 저장 -> 다른 클래스에서도 이 데이터를 꺼낼 수 있다
        return true;
    }
}
