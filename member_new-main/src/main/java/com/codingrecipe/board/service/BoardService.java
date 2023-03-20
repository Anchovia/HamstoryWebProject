package com.codingrecipe.board.service;

import com.codingrecipe.board.dto.BoardDTO;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

// DTO -> Entity
// Entity -> DTO 로 변환하는 역할

@Service
@RequiredArgsConstructor
public class BoardService {
    public static final String COLLECTION_NAME = "BOARD";
    public void save(BoardDTO boardDTO) throws ExecutionException, InterruptedException {
        Firestore firestore = FirestoreClient.getFirestore();

        boardDTO.setId(createId());

        firestore.collection(COLLECTION_NAME).document(String.valueOf(boardDTO.getId())).set(boardDTO);  // board테이블에 boardDTO를 저장할건데 아이디를 boardDTO에 저장된 아이디로 지정해준다

    }

    public BoardDTO findOne(Long id) throws ExecutionException, InterruptedException {
        Firestore firestore = FirestoreClient.getFirestore();

        DocumentReference docRef = firestore.collection(COLLECTION_NAME).document(String.valueOf(id));
        ApiFuture<DocumentSnapshot> apiFuture = docRef.get();
        DocumentSnapshot document = apiFuture.get();

        if(document == null){
            System.out.println(">>> This id does not exist");
            return null;
        }

        System.out.println(">>> returned board: " + id);
        return document.toObject(BoardDTO.class);
    }

    public List<BoardDTO> findAll() throws ExecutionException, InterruptedException {
        Firestore firestore = FirestoreClient.getFirestore();

        ApiFuture<QuerySnapshot> future = firestore.collection("BOARD").get();
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();  //뭔소린지 모르는 형태
        List<BoardDTO> boardDTOList = new ArrayList<>();
        for (QueryDocumentSnapshot document : documents) { // documents에 있는 애들을 하나씩 빼와서 document에 넣음
        //  document.toObject(BoardDTO.class)
            boardDTOList.add(document.toObject(BoardDTO.class));
        }
        return boardDTOList;
    }

    //게시물 아이디 생성
    public long createId() throws ExecutionException, InterruptedException {
        Firestore firestore = FirestoreClient.getFirestore();

        //COUNT 컬렉션의 pid 문서에서 count 값 가져오기
        DocumentReference documentReference = firestore.collection("COUNT").document("BoardCount");
        ApiFuture<DocumentSnapshot> apiFuture = documentReference.get();
        DocumentSnapshot document = apiFuture.get();

        Long id = (Long) document.get("id");

        documentReference.update("id", id + 1);  // id를 가져온 뒤 +1한 것을 업데이트해서 저장

        return id;
    }
}
