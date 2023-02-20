package com.codingrecipe.member.config;

import com.codingrecipe.member.jwt.BearerAuthInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {
    private final BearerAuthInterceptor bearerAuthInterceptor;

    public WebMvcConfig(BearerAuthInterceptor bearerAuthInterceptor){
        this.bearerAuthInterceptor = bearerAuthInterceptor;
    }

    public void addInterceptors(InterceptorRegistry registry){
        System.out.println(">>> 인터셉터 등록");
        registry.addInterceptor(bearerAuthInterceptor).addPathPatterns("/members/mypage");
        registry.addInterceptor(bearerAuthInterceptor).addPathPatterns("/");
    }

    public void addCorsMappings(CorsRegistry registry){
        registry.addMapping("/members/new").allowedOrigins("http://localhost:3000");
        registry.addMapping("/members/login").allowedOrigins("http://localhost:3000");
    }
}
