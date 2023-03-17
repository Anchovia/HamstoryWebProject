package com.codingrecipe.member.jwt;

import org.apache.logging.log4j.util.Strings;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.util.Enumeration;

//프론트에서 토큰을 보내줄 때, "Bearer 토큰" 이 형태로 보내줌
//근데 토큰을 해석하려면 Bearer 부분은 빼고 토큰 부분만 봐야 함
//그래서 여기에서 Bearer 부분을 때서 토큰 부분만 리턴해줌
@Component
public class AuthorizationExtractor {
    public static final String AUTHORIZATION = "Authorization";
    public static final String ACCESS_TOKEN_TYPE = AuthorizationExtractor.class.getSimpleName() + ".ACCESS_TOKEN_TYPE";

    public String extract(HttpServletRequest request, String type){
        Enumeration<String> headers = request.getHeaders(AUTHORIZATION);
        while(headers.hasMoreElements()){
            String value = headers.nextElement();
            if(value.toLowerCase().startsWith(type.toLowerCase())){
                //System.out.println(">>> return substring");
                return value.substring(type.length()).trim();
            }
        }

        //System.out.println(">>> return empty string");
        return Strings.EMPTY;
    }
}
