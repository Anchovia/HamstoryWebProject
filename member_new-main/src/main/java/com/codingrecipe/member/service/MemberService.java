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
<<<<<<< HEAD
    public String insertMember(MemberDTO member) throws Exception{
=======
    public boolean insertMember(MemberDTO member) throws Exception{
>>>>>>> f81a05eb8deb54a767383e1b193f711575374278
        Firestore firestore = FirestoreClient.getFirestore();

        //중복 이메일인지 체크
        if(!validateDuplicateMember(member.getMemberEmail())){
<<<<<<< HEAD
            return null;
        }
        ApiFuture<DocumentReference> apiFuture = firestore.collection(COLLECTION_NAME).add(member);
        return createToken(member);
=======
            return false;
        }
        ApiFuture<DocumentReference> apiFuture = firestore.collection(COLLECTION_NAME).add(member);
        return true;
>>>>>>> f81a05eb8deb54a767383e1b193f711575374278
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
        /*
        DocumentReference documentReference = firestore.collection(COLLECTION_NAME).document(email);
        ApiFuture<DocumentSnapshot> apiFuture = documentReference.get();
        DocumentSnapshot documentSnapshot = apiFuture.get();
        */
        DocumentSnapshot documentSnapshot = getMemberByEmail(email);

        if(documentSnapshot == null){
            return null;
        }

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
        ApiFuture<QuerySnapshot> apiFuture = firestore.collection(COLLECTION_NAME).whereEqualTo("memberEmail", email).get();
        List<QueryDocumentSnapshot> documents = apiFuture.get().getDocuments();
        if(documents.size() == 0){
            return null;
        }
        DocumentSnapshot documentSnapshot = documents.get(0);

        return documentSnapshot;
    }

    public String login(LoginForm form) throws Exception {
        MemberDTO member = getMemberDetail(form.getEmail());

        //조회결과가 있다
        if(member != null){
            //비밀번호 일치
            if(member.getMemberPassword().equals(form.getPw())){
                return createToken(member);
            }else{
                return null;
            }
        }
        return null;
    }

    //테스트x
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
}
