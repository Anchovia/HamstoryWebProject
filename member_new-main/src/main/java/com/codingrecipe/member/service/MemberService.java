package com.codingrecipe.member.service;

import com.codingrecipe.member.dto.MemberDTO;
import com.codingrecipe.member.form.LoginForm;
import com.codingrecipe.member.jwt.JwtTokenProvider;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.concurrent.ExecutionException;

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
        if(!validateDuplicateMember(member.getMemberEmail(), member.getMemberName())){
            return null;
        }

        //COLLECTION_NAME, 즉 MEMBER 라는 이름을 가진 테이블에 member를 추가
        ApiFuture<DocumentReference> apiFuture = firestore.collection(COLLECTION_NAME).add(member);

        return createToken(member);
    }

    //이메일과 닉네임 중복 체크 함수(emailCheck)
    public boolean validateDuplicateMember(String email, String name) throws Exception{
        //MemberDTO member = getMemberDetail(email);

        DocumentSnapshot emailChecker = getMemberByParam("memberEmail", email);  // 데이터베이스에서 memberEmail: email로 저장하므로 검색하기 위해 파라미터를 보냄
        if(emailChecker != null){//이메일이 중복된다면
            return false;//이메일 중복
        }

        DocumentSnapshot nameChecker = getMemberByParam("memberName", name);  // 위와 같은 맥락으로 이름을 검색함
        if(nameChecker != null){//닉네임이 중복된다면
            return false;//닉네임 중복
        }

        return true;//사용가능
    }

    //파라미터로 멤버 찾기
    //field: memberEmail, memberPassword, memberName
    //field의 값이 param인 멤버를 찾음
    // 리턴타입: DocumentSnapshot
    public DocumentSnapshot getMemberByParam(String field, String param) throws ExecutionException, InterruptedException {
        Firestore firestore = FirestoreClient.getFirestore();

        //field가 param인 멤버를 찾아서 apiFuture에 저장
        // COLLECTION_NAME=member니까 member쿼리에서 field에서 param인 애들을 확인하고 가져옴
        ApiFuture<QuerySnapshot> apiFuture = firestore.collection(COLLECTION_NAME).whereEqualTo(field, param).get();  // whereEqualTo: 원래 있던 함수

        //apiFuture에 저장된 애들을 리스트에 저장
        //반환형을 맞춰주기 위해 되는대로 함
        List<QueryDocumentSnapshot> documents = apiFuture.get().getDocuments();

        if(documents.size() == 0){//리스트의 사이즈가 0이라는 것은 field가 param인 멤버가 없다는 뜻이므로 널 반환
            return null;
        }
        //리스트의 사이즈가 0이 아니라는 건 리스트에 적어도 하나 이상의 멤버가 있다는 뜻인데,
        //우리는 회원가입에서 이메일이 겹치지 않게 했으니까 결론적으로는 리스트에 하나의 멤버만 있을거임
        //그래서 리스트의 0번째 요소가 필드가 (param인 멤버를 찾은) 결과물
        DocumentSnapshot documentSnapshot = documents.get(0);

        return documentSnapshot;//찾은 멤버의 정보를 DocumentSnapshot 형태로 반환(이게 뭔지 잘 모르겟는데 암튼 일케 하면 돼)
    }

    //email로 멤버 정보 조회
    public MemberDTO getMemberDetail(String email) throws Exception{
        Firestore firestore = FirestoreClient.getFirestore();

        //이메일로 멤버를 찾아서 DocumentSnapshot 형태로 받아옴
        DocumentSnapshot documentSnapshot = getMemberByParam("memberEmail", email);

        if(documentSnapshot == null){//이메일이 email인 멤버를 찾지 못한 경우
            return null;
        }

        //여기도 뭔지 잘 모르겠는데 아무튼 DocumentSnapshot 형태를 MemberDTO 형태로 바꿔줌
        MemberDTO member = null;
        if(documentSnapshot.exists()){
            member = documentSnapshot.toObject(MemberDTO.class);  // memberDTO에 있는 class 형태로 바꿔줌
            return member;
        }else{
            return null;
        }
    }

    //로그인
    public String login(LoginForm form) throws Exception {
        MemberDTO member = getMemberDetail(form.getEmail());  // email로 이메일, 닉네임, 비번 정보를 가져옴

        //이메일로 검색했을 때 조회결과가 있다
        if(member != null){
            //비밀번호 일치하는지 확인
            if(member.getMemberPassword().equals(form.getPw())){
                return createToken(member);  // 토큰 발급
            }else{//비밀번호 불일치
                return null;
            }
        }//조회결과가 없음
        return null;
    }

    //이메일로 아이디 검색
    public String getIdByEmail(String email) throws Exception{
        DocumentSnapshot documentSnapshot = getMemberByParam("memberEmail", email); // 이메일 검색으로 멤버를 받아옴
        if(documentSnapshot == null){
            return null;
        }
        return documentSnapshot.getId();  // 아이디 반환
    }

    //회원 탈퇴 만들어봤는데 아직 테스트는 안해봤다
    public void deleteByEmail(String email) throws Exception {
        MemberDTO member = getMemberDetail(email);

        Firestore firestore = FirestoreClient.getFirestore();
        DocumentSnapshot documentSnapshot = getMemberByParam("memberEmail", email);
        String id = documentSnapshot.getId();  // id변수에다가 id저장 getId: 원래있는함수
        ApiFuture<WriteResult> apiFuture = firestore.collection(COLLECTION_NAME).document(id).delete();  //멤버테이블에서 document(:아이디로 문서를 찾는 함수)로 멤버행을 찾은담에 지우기
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