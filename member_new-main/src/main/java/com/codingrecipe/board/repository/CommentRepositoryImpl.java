package com.codingrecipe.board.repository;

import com.codingrecipe.board.entity.Comment;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Repository;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Repository
public class CommentRepositoryImpl implements CommentRepository{

    public static final String COLLECTION_NAME = "COMMENT";

    @Override
    public void save(Comment comment){
        try{
            Firestore firestore = FirestoreClient.getFirestore();

            comment.setCommentId(createCommentId());

            firestore.collection(COLLECTION_NAME).document(String.valueOf(comment.getCommentId())).set(comment);  // 테이블에 comment를 저장할건데 아이디를 comment에 저장된 아이디로 지정해준다
        } catch (Exception e){
            e.printStackTrace();
        }
    }

    @Override
    public void delete(String id){
        try{
            Firestore firestore = FirestoreClient.getFirestore();
            firestore.collection(COLLECTION_NAME).document(id).delete();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public List<Comment> findByBoardId(Long boardId){
        try{
            Firestore firestore = FirestoreClient.getFirestore();

            ApiFuture<QuerySnapshot> future = firestore.collection(COLLECTION_NAME).whereEqualTo("boardId", boardId).get();
            List<QueryDocumentSnapshot> documents = future.get().getDocuments();  //뭔소린지 모르는 형태

            List<Comment> commentList = new ArrayList<>();

            for (QueryDocumentSnapshot document : documents) { // documents에 있는 애들을 하나씩 빼와서 document에 넣음
                Comment comment = document.toObject(Comment.class);

                Date createdTime = new SimpleDateFormat("yyyy/MM/dd hh:mm").parse(comment.getCreatedTime()); // 작성 시간 가져옴
                long diff = System.currentTimeMillis() - createdTime.getTime(); // 현재시간 - 작성시간
                long day = 86400000; // 1일 = 86400000 밀리초
                if (diff > day * 3) { // 작성일이 3일 전 이후 이라면 날짜 표시
                    comment.setCreatedTime(new SimpleDateFormat("yyyy . MM . dd").format(createdTime));
                } else {
                    int diff2 = (int) (diff / day);
                    if (diff2 == 0) { // 오늘이면 시간 표시
                        comment.setCreatedTime(new SimpleDateFormat("hh : mm").format(createdTime));
                    } else { // 1일 ~ 3일 전이라면 며칠전인지 표시
                        comment.setCreatedTime(diff2 + "일 전");
                    }
                }

                commentList.add(comment);
            }
            return commentList;
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public List<Comment> findAll() {
        try{
            Firestore firestore = FirestoreClient.getFirestore();

            ApiFuture<QuerySnapshot> future = firestore.collection("COMMENT").get();
            List<QueryDocumentSnapshot> documents = future.get().getDocuments();
            List<Comment> commentList = new ArrayList<>();

            for (QueryDocumentSnapshot document : documents) { // documents에 있는 애들을 하나씩 빼와서 document에 넣음
                Comment comment = document.toObject(Comment.class);

                commentList.add(comment);
            }
            return commentList;
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    private Long createCommentId() {
        try{
            Firestore firestore = FirestoreClient.getFirestore();

            //COUNT 컬렉션의 pid 문서에서 count 값 가져오기
            DocumentReference documentReference = firestore.collection("COUNT").document("CommentCount");
            ApiFuture<DocumentSnapshot> apiFuture = documentReference.get();
            DocumentSnapshot document = apiFuture.get();

            Long CommentId = (Long) document.get("id");

            documentReference.update("id", CommentId + 1);  // id를 가져온 뒤 +1한 것을 업데이트해서 저장

            return CommentId;
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }
}
