// module import
import { useEffect, useState } from "react"
import axios from "axios";

// 데이터를 가져오는 hook
export default function useFetch(url){ 
    // 데이터를 저장할 state
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    // url이 변경될 때마다 데이터를 가져오는 useEffect
    useEffect(() => {
        // 비동기 함수 선언
        const fetchData = async () => {
            try{
                setLoading(true); // 데이터를 불러오기 시작하면 loading을 true로 설정

                const res = await axios.get(url); // url을 이용해 데이터를 가져옴
                setData(res.data); // 데이터를 state에 저장

                setLoading(false); // 데이터 로드가 완료되면 loading을 false로 설정
            }
            catch (error) {
                console.log("useFetch 훅에서 데이터를 가져오는데 실패하였습니다. url 및 로그:", url, error)
            }
        };
        
        fetchData(); // 비동기 함수 호출
    }, [url]);

    return {data, loading}; // return: 데이터
}