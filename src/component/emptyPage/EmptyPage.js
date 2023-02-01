import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function EmptyPage(){
    const movePage = useNavigate();

    useEffect(()=>{
        movePage("/");
    });

    return (
        <></>
    );
}