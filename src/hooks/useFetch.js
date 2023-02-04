import { useEffect, useState } from "react"

export default function useFetch(url){ // url: fetch를 이용해 데이터를 가져올 url
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setData(data);
        });
    }, [url]);

    return data; // return: fetch를 이용해 가져온 데이터
}