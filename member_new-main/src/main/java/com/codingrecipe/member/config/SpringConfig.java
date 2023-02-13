package com.codingrecipe.member.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class SpringConfig implements WebMvcConfigurer {

    public void addCorsMappings(CorsRegistry registry){
        registry.addMapping("/members/new").allowedOrigins("http://localhost:3000");
        registry.addMapping("/members/login").allowedOrigins("http://localhost:3000");
    }
}