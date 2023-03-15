/*
    설명: 페이지 이동시 스크롤을 맨 위로 올려주는 훅
*/

import { useEffect } from 'react';

export default function useScrollTop(){
    useEffect(() => {
        window.scrollTo({
            top: 0,
        })
    }, []);
}