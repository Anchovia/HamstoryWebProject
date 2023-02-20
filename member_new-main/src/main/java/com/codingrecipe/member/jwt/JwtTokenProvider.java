package com.codingrecipe.member.jwt;

import com.codingrecipe.member.dto.MemberDTO;
import io.jsonwebtoken.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.*;

@Component
public class JwtTokenProvider {
    private String secretKey;
    private long validityInMilliseconds;

    public JwtTokenProvider(@Value("${security.jwt.token.secret-key}") String secretKey, @Value("${security.jwt.token.expire-length}") long validityInMilliseconds){
        this.secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());
        this.validityInMilliseconds = validityInMilliseconds;
    }

    public Map<String, Object> createPayload(MemberDTO member){
        Map<String, Object> payloads = new HashMap<>();
        payloads.put("email", member.getMemberEmail());
        payloads.put("nickName", member.getMemberName());
        payloads.put("pw", member.getMemberPassword());

        return payloads;
    }

    //토큰 생성
    public String createToken(MemberDTO member){
        //Claims claims = Jwts.claims().setSubject(subject);

        Map<String, Object> payloads = createPayload(member);

        Date now = new Date();

        Date validity = new Date(now.getTime() + validityInMilliseconds);

        return Jwts.builder()
                .setClaims(payloads)
                .setIssuedAt(now)
                .setExpiration(validity)
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
    }

    //토큰에서 값 추출
    public Map<String, Object> getSubject(String token){
        Claims claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody();

        return claims;
        //return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject();
    }

    //유효한 토큰인지 확인
    public boolean validateToken(String token){
        try{
            Jws<Claims> claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);
            if(claims.getBody().getExpiration().before(new Date())){
                return false;
            }
            return true;
        }catch(JwtException | IllegalArgumentException e){
            return false;
        }
    }
}
