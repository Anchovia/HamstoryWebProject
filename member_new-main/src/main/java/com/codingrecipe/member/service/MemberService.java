package com.codingrecipe.member.service;

import com.codingrecipe.member.dto.MemberDTO;
import com.codingrecipe.member.form.LoginForm;
import com.codingrecipe.member.jwt.JwtTokenProvider;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MemberService {

    private final JwtTokenProvider jwtTokenProvider;

    public static final String COLLECTION_NAME = "MEMBER";

    public MemberService(JwtTokenProvider jwtTokenProvider){
        this.jwtTokenProvider = jwtTokenProvider;
    }

    //데이터베이스에 member 삽입(save)
    public String insertMember(MemberDTO member) throws Exception{
        Firestore firestore = FirestoreClient.getFirestore();

        //중복 이메일인지 체크
        if(!validateDuplicateMember(member.getMemberEmail())){
            return null;
        }

        //COLLECTION_NAME, 즉 MEMBER 라는 이름을 가진 테이블에 member를 추가
        ApiFuture<DocumentReference> apiFuture = firestore.collection(COLLECTION_NAME).add(member);

        return createToken(member);
    }

    //이메일 중복 체크(emailCheck)
    public boolean validateDuplicateMember(String email) throws Exception{
        MemberDTO member = getMemberDetail(email);
        if(member != null){//이메일이 중복된다면
            return false;//중복
            //throw new IllegalStateException("중복되는 이메일 입니다.");
        }
        return true;//사용가능
    }

    //email로 멤버 정보 조회
    public MemberDTO getMemberDetail(String email) throws Exception{
        Firestore firestore = FirestoreClient.getFirestore();

        //이메일로 멤버를 찾아서 DocumentSnapshot 형태로 받아옴
        DocumentSnapshot documentSnapshot = getMemberByEmail(email);

        if(documentSnapshot == null){//이메일이 email인 멤버를 찾지 못한 경우
            return null;
        }

        //여기도 뭔지 잘 모르겠는데 아무튼 DocumentSnapshot 형태를 MemberDTO 형태로 바꿔줌
        MemberDTO member = null;
        if(documentSnapshot.exists()){
            member = documentSnapshot.toObject(MemberDTO.class);
            return member;
        }else{
            return null;
        }
    }

    //이메일로 멤버 찾아서 문서 반환
    public DocumentSnapshot getMemberByEmail(String email) throws Exception {
        Firestore firestore = FirestoreClient.getFirestore();

        //memberEmail이 email인 멤버를 찾아서 apiFuture에 저장
        ApiFuture<QuerySnapshot> apiFuture = firestore.collection(COLLECTION_NAME).whereEqualTo("memberEmail", email).get();

        //apiFuture에 저장된 애들을 리스트에 저장
        List<QueryDocumentSnapshot> documents = apiFuture.get().getDocuments();

        if(documents.size() == 0){//리스트의 사이즈가 0이라는 것은 이메일이 email인 멤버가 없다는 뜻이므로 널 반환
            return null;
        }
        //리스트의 사이즈가 0이 아니라는 건 리스트에 적어도 하나 이상의 멤버가 있다는 뜻인데,
        //우리는 회원가입에서 이메일이 겹치지 않게 했으니까 결론적으로는 리스트에 하나의 멤버만 있을거임
        //그래서 리스트의 0번째 요소가 이메일이 email인 멤버
        DocumentSnapshot documentSnapshot = documents.get(0);

        return documentSnapshot;//멤버의 정보를 DocumentSnapshot 형태로 반환(이게 뭔지 잘 모르겟는데 암튼 일케 하면 돼)
    }

    //로그인
    public String login(LoginForm form) throws Exception {
        MemberDTO member = getMemberDetail(form.getEmail());

        //조회결과가 있다
        if(member != null){
            //비밀번호 일치
            if(member.getMemberPassword().equals(form.getPw())){
                return createToken(member);
            }else{//비밀번호 불일치
                return null;
            }
        }//조회결과가 없음
        return null;
    }

    //회원 탈퇴 만들어봤는데 아직 테스트는 안해봤다
    public void deleteByEmail(String email) throws Exception {
        MemberDTO member = getMemberDetail(email);

        Firestore firestore = FirestoreClient.getFirestore();
        DocumentSnapshot documentSnapshot = getMemberByEmail(email);
        String id = documentSnapshot.getId();
        ApiFuture<WriteResult> apiFuture = firestore.collection(COLLECTION_NAME).document(id).delete();
    }

    //이메일로 토큰 생성 후 리턴
    public String createToken(MemberDTO member){
        return jwtTokenProvider.createToken(member);
    }

    //유효한 토큰인지 확인
    public boolean validateToken(String token){
        return jwtTokenProvider.validateToken(token);
    }
}
