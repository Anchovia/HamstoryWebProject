package com.codingrecipe.board.repository;

import com.codingrecipe.board.entity.Board;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Repository;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public class BoardRepositoryImpl implements BoardRepository {

    public static final String COLLECTION_NAME = "BOARD";

    @Override
    public void save(Board board){
        try {
            Firestore firestore = FirestoreClient.getFirestore();

            board.setId(createBoardId());

            firestore.collection(COLLECTION_NAME).document(String.valueOf(board.getId())).set(board);  // 테이블에 board를 저장할건데 아이디를 board에 저장된 아이디로 지정해준다
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
    public Optional<Board> findById(Long id){
        try{
            Firestore firestore = FirestoreClient.getFirestore();

            DocumentReference docRef = firestore.collection(COLLECTION_NAME).document(String.valueOf(id));
            ApiFuture<DocumentSnapshot> apiFuture = docRef.get();
            DocumentSnapshot document = apiFuture.get();

            if(document != null) {
                //int hits = (int) document.get("hits");
                int hits = Integer.parseInt(String.valueOf(document.get("hits")));
                docRef.update("hits", hits + 1);  // 조회수 증가시킴
                System.out.println(">>> returned board: " + id);
                return Optional.ofNullable(document.toObject(Board.class));
            }
        } catch (Exception e){
            e.printStackTrace();
        }
        return Optional.empty();
    }

    @Override
    public List<Board> findAll(){
        try{
            Firestore firestore = FirestoreClient.getFirestore();

            ApiFuture<QuerySnapshot> future = firestore.collection("BOARD").get();
            List<QueryDocumentSnapshot> documents = future.get().getDocuments();  //뭔소린지 모르는 형태
            List<Board> boardList = new ArrayList<>();

            for (QueryDocumentSnapshot document : documents) { // documents에 있는 애들을 하나씩 빼와서 document에 넣음
                Board boardDTO = document.toObject(Board.class);

                Date createdTime = new SimpleDateFormat("yyyy/MM/dd hh:mm").parse(boardDTO.getCreatedTime()); // 작성 시간 가져옴
                long diff = System.currentTimeMillis() - createdTime.getTime(); // 현재시간 - 작성시간
                long day = 86400000; // 1일 = 86400000 밀리초
                if(diff > day * 3){ // 작성일이 3일 전 이후 이라면 날짜 표시
                    boardDTO.setCreatedTime(new SimpleDateFormat("yyyy . MM . dd").format(createdTime));
                } else {
                    int diff2 = (int) (diff / day);
                    if(diff2 == 0){ // 오늘이면 시간 표시
                        boardDTO.setCreatedTime(new SimpleDateFormat("hh : mm").format(createdTime));
                    }else{ // 1일 ~ 3일 전이라면 며칠전인지 표시
                        boardDTO.setCreatedTime(diff2 + "일 전");
                    }
                }

                boardList.add(boardDTO);
            }

            boardList.sort((b1, b2) -> (int) (b2.getId() - b1.getId()));
            return boardList;
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public List<Board> findByMemberName(String name) {
        try {
            Firestore firestore = FirestoreClient.getFirestore();

            ApiFuture<QuerySnapshot> apiFuture = firestore.collection(COLLECTION_NAME).whereEqualTo("writer", name).get();
            List<QueryDocumentSnapshot> documents = apiFuture.get().getDocuments();

            List<Board> boardList = new ArrayList<>();
            for(QueryDocumentSnapshot document : documents) {
                boardList.add(document.toObject(Board.class));
            }

            boardList.sort((b1, b2) -> (int) (b2.getId() - b1.getId()));
            return boardList;
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    //게시물 아이디 생성
    private Long createBoardId() {
        try{
            Firestore firestore = FirestoreClient.getFirestore();

            //COUNT 컬렉션의 pid 문서에서 count 값 가져오기
            DocumentReference documentReference = firestore.collection("COUNT").document("BoardCount");
            ApiFuture<DocumentSnapshot> apiFuture = documentReference.get();
            DocumentSnapshot document = apiFuture.get();

            Long BoardId = (Long) document.get("id");

            documentReference.update("id", BoardId + 1);  // id를 가져온 뒤 +1한 것을 업데이트해서 저장

            return BoardId;
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

}
