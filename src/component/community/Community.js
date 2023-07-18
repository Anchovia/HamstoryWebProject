// module import
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Community(){
    const location = useLocation(); // 현재 url을 location에 반환
    const movePage = useNavigate(); // 페이지 이동을 위한 함수

    // lastestPost 페이지로 이동
    useEffect(()=>{
        movePage(location.pathname + "/latestPost");
    });

    return(
        <></>
    );
}