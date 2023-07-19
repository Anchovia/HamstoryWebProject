package com.codingrecipe.board.repository;

import com.codingrecipe.board.entity.Like;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class LikeRepositoryImpl implements LikeRepository {

    public static final String COLLECTION_NAME = "LIKE";

    @Override
    public void update(Like like){
        try{
            Firestore firestore = FirestoreClient.getFirestore();

            Long likeId = isDuplicate(like);

            if (likeId == null) {  // 겹치는 것이 없을 경우(그 게시글에 그 계정으로 좋아요가 안 눌러져있음)
                like.setLikeId(createLikeId());
                firestore.collection(COLLECTION_NAME).document(String.valueOf(like.getLikeId())).set(like);
                increaseLikes(like.getBoardId());  // 게시판 좋아요 +1
            } else {  // 이미 좋아요를 누른 경우
                firestore.collection(COLLECTION_NAME).document(String.valueOf(likeId)).delete();
                decreaseLikes(like.getBoardId());  // 게시판 좋아요 -1
            }
        } catch (Exception e){
            e.printStackTrace();
        }
    }

    private Long isDuplicate(Like like){
        try{
            Firestore firestore = FirestoreClient.getFirestore();
            ApiFuture<QuerySnapshot> apiFuture = firestore.collection(COLLECTION_NAME).whereEqualTo("memberNickname", like.getMemberNickname()).get(); //일단 멤버아이디로 거르기
            List<QueryDocumentSnapshot> documents = apiFuture.get().getDocuments();

            if(documents.isEmpty()){
                return null;
            }

            for(QueryDocumentSnapshot document : documents){
                Like likeDTO2 = document.toObject(Like.class);
                if(likeDTO2.getBoardId() == like.getBoardId()){ //그리고 boardId 일치하는거 찾기
                    return likeDTO2.getLikeId(); // 좋아요 있으면 likeId 리턴
                }
            }
            return null; // 좋아요 없음
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    private void increaseLikes(Long boardId){
        try{
            Firestore firestore = FirestoreClient.getFirestore();

            DocumentReference docRef = firestore.collection("BOARD").document(String.valueOf(boardId));
            ApiFuture<DocumentSnapshot> apiFuture = docRef.get();
            DocumentSnapshot document = apiFuture.get();
            if(document == null){  // 게시물이 없을 때
                System.out.println(">>> This id does not exist");
                return;
            }
            Long likes = (Long) document.get("likes");  // 게시물 좋아요 수 가져오기
            docRef.update("likes", likes + 1);  // 게시물 좋아요 수+1
        } catch (Exception e){
            e.printStackTrace();
        }
    }

    private void decreaseLikes(Long boardId) {
        try{
            Firestore firestore = FirestoreClient.getFirestore();

            DocumentReference docRef = firestore.collection("BOARD").document(String.valueOf(boardId));
            ApiFuture<DocumentSnapshot> apiFuture = docRef.get();
            DocumentSnapshot document = apiFuture.get();
            if(document == null){  // 게시물이 없을 때
                System.out.println(">>> This id does not exist");
                return;
            }
            Long likes = (Long) document.get("likes");  // 게시물 좋아요 수 가져오기
            docRef.update("likes", likes - 1);  // 게시물 좋아요 수+1
        } catch (Exception e){
            e.printStackTrace();
        }
    }

    private Long createLikeId(){
        try{
            Firestore firestore = FirestoreClient.getFirestore();

            //COUNT 컬렉션의 pid 문서에서 count 값 가져오기
            DocumentReference documentReference = firestore.collection("COUNT").document("LikeCount");
            ApiFuture<DocumentSnapshot> apiFuture = documentReference.get();
            DocumentSnapshot document = apiFuture.get();

            Long LikeId = (Long) document.get("id");

            documentReference.update("id", LikeId + 1);  // id를 가져온 뒤 +1한 것을 업데이트해서 저장

            return LikeId;
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }
}
