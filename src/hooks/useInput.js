// 모듈 import
import { useState } from "react";

// initialValue: 초기값
export default function useInput(initialValue){
    // 데이터를 저장할 state
    const [inputValue, setInputValue] = useState(initialValue);

    // 데이터를 변경하는 함수
    function handleChange(e){
        setInputValue(e.target.value);
    }

    // return: 데이터와 데이터를 변경하는 함수
    return [inputValue, handleChange];
}