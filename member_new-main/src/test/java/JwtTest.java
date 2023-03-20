import com.codingrecipe.member.form.LoginForm;
import com.codingrecipe.jwt.JwtTokenProvider;
import com.codingrecipe.member.service.MemberService;
import org.junit.jupiter.api.Test;

public class JwtTest {
    String token = null;

    private String secretKey = "secretsecretsecretsecretsecret";
    private long validityInMilliseconds = 3600000;
    JwtTokenProvider jwtTokenProvider = new JwtTokenProvider(secretKey, validityInMilliseconds);
    MemberService memberService = new MemberService(jwtTokenProvider);

    @Test
    public void login() throws Exception{
        LoginForm form = new LoginForm();
        form.setEmail("jwt@a.com");
        form.setPw("jwt1111");
        token = memberService.login(form);
        System.out.println("token: " + token);
        //assertThat(token).isNotEmpty();
    }
}
