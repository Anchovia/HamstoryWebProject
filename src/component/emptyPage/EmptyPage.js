/* 
    설명: 잘못된 경로로 접근했을 때, 메인 페이지로 이동시키는 컴포넌트
*/

// 모듈 import
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function EmptyPage(){
    // 페이지 이동을 위한 함수
    const movePage = useNavigate();

    // 잘못된 경로로 접근했을 때(컴포넌트가 실행되었을 때), 메인 페이지로 이동
    useEffect(()=>{
        movePage("/");
    });

    return (
        <></>
    );
}