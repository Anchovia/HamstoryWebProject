/*
    설명: url을 이용해 데이터를 가져오는 hook
*/

// 모듈 import
import { useEffect, useState } from "react"
import axios from "axios";

// 데이터를 가져오는 hook
export default function useFetch(url){ 
    // 데이터를 저장할 state
    const [data, setData] = useState([]);

    // url이 변경될 때마다 데이터를 가져오는 useEffect
    useEffect(() => {
        axios.get(url) // url을 이용해 데이터를 가져옴
        .then((res) => {
            setData(res.data); // 데이터를 state에 저장
        });
    }, [url]);

    return data; // return: 데이터
}