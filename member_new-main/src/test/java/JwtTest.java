import com.codingrecipe.member.dto.LoginDto;
import com.codingrecipe.jwt.JwtTokenProvider;
import com.codingrecipe.member.service.MemberServiceImpl;
import org.junit.jupiter.api.Test;

public class JwtTest {
    String token = null;

    private String secretKey = "secretsecretsecretsecretsecret";
    private long validityInMilliseconds = 3600000;
    JwtTokenProvider jwtTokenProvider = new JwtTokenProvider(secretKey, validityInMilliseconds);
    MemberServiceImpl memberService = new MemberServiceImpl(jwtTokenProvider);

    @Test
    public void login() throws Exception{
        LoginDto form = new LoginDto();
        form.setEmail("jwt@a.com");
        form.setPw("jwt1111");
        token = memberService.login(form);
        System.out.println("token: " + token);
        //assertThat(token).isNotEmpty();
    }
}
