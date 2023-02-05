/*
    설명: fetch를 이용해 데이터를 가져오는 hook
*/

// 모듈 import
import { useEffect, useState } from "react"

// url: fetch를 이용해 데이터를 가져올 url
export default function useFetch(url){ 
    // 데이터를 저장할 state
    const [data, setData] = useState([]);

    // url이 변경될 때마다 fetch를 이용해 데이터를 가져옴
    useEffect(() => {
        fetch(url)
        .then(res => { // res: fetch를 이용해 가져온 데이터
            return res.json(); // json 형식으로 변환
        })
        .then(data => { // data: json 형식으로 변환된 데이터
            setData(data); // state에 데이터 저장
        });
    }, [url]);

    return data; // return: fetch를 이용해 가져온 데이터
}