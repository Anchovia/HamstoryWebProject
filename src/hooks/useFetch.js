/*
    설명: url을 이용해 데이터를 가져오는 훅
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
        // 비동기 함수 선언
        const fetchData = async () => {
            try{
                const res = await axios.get(url); // url을 이용해 데이터를 가져옴
                setData(res.data); // 데이터를 state에 저장
            }
            catch (error) {
                console.log("useFetch 훅에서 데이터를 가져오는데 실패하였습니다. url 및 로그:", url, error)
            }
        };
        
        fetchData(); // 비동기 함수 호출
    }, [url]);

    return data; // return: 데이터
}