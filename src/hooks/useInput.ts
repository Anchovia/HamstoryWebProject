// module import
import { useState } from "react";

type returnType = [
    string,
    (e :React.ChangeEvent<HTMLInputElement>) => void,
]

// initialValue: 초기값
export default function useInput(initialValue :string) :returnType{
    // 데이터를 저장할 state
    const [inputValue, setInputValue] = useState<string>(initialValue);

    // 데이터를 변경하는 함수
    const handleChange = (e :React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    // return: 데이터와 데이터를 변경하는 함수
    return [inputValue, handleChange];
}