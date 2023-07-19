package com.codingrecipe.member.repository;

import com.codingrecipe.member.entity.Member;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class MemberRepositoryImpl implements MemberRepository{

    public static final String COLLECTION_NAME = "MEMBER";

    @Override
    public void save(Member member){
        try{
            Firestore firestore = FirestoreClient.getFirestore();

            //COLLECTION_NAME, 즉 MEMBER 라는 이름을 가진 테이블에 member를 추가
            ApiFuture<DocumentReference> apiFuture = firestore.collection(COLLECTION_NAME).add(member);
        } catch (Exception e){
            e.printStackTrace();
        }
    }

    @Override
    public Optional<Member> findByEmail(String email){
        try{
            //이메일로 멤버를 찾아서 DocumentSnapshot 형태로 받아옴
            DocumentSnapshot documentSnapshot = findByParam("memberEmail", email);

            if(documentSnapshot != null){
                return Optional.ofNullable(documentSnapshot.toObject(Member.class));
            }
        } catch (Exception e){
            e.printStackTrace();
        }
        return Optional.empty();
    }

    @Override
    public Optional<Member> findByName(String name){
        try{
            //닉네임으로 멤버를 찾아서 DocumentSnapshot 형태로 받아옴
            DocumentSnapshot documentSnapshot = findByParam("memberName", name);

            if(documentSnapshot != null){
                return Optional.ofNullable(documentSnapshot.toObject(Member.class));
            }
        } catch (Exception e){
            e.printStackTrace();
        }
        return Optional.empty();
    }

    @Override
    public String getIdByEmail(String email){
        try{
            DocumentSnapshot documentSnapshot = findByParam("memberEmail", email); // 이메일 검색으로 멤버를 받아옴
            if(documentSnapshot == null){
                return null;
            }
            return documentSnapshot.getId();  // 아이디 반환
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public void deleteByEmail(String email){
        try{
            Firestore firestore = FirestoreClient.getFirestore();
            DocumentSnapshot documentSnapshot = findByParam("memberEmail", email);
            String id = documentSnapshot.getId();  // id변수에다가 id저장 getId: 원래있는함수
            firestore.collection(COLLECTION_NAME).document(id).delete();  //멤버테이블에서 document(:아이디로 문서를 찾는 함수)로 멤버행을 찾은담에 지우기
        } catch (Exception e){
            e.printStackTrace();
        }
    }

    //파라미터로 멤버 찾기
    //field: memberEmail, memberPassword, memberName
    //field의 값이 param인 멤버를 찾음
    // 리턴타입: DocumentSnapshot
    private DocumentSnapshot findByParam(String field, String param){
        try {
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
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }
}
