/*
  설명: App.js는 라우팅을 담당하는 파일입니다.
*/

// 컴포넌트 import
import Header from "./component/header/Header";
import Main from "./component/main/Main";
import Login from "./component/login/Login";
import Footer from "./component/footer/Footer";
import GoToUpButton from "./component/button/GoToUpButton";
import EmptyPage from "./component/emptyPage/EmptyPage";

// 모듈 import
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect } from "react";

function App() {
  // 브라우저가 닫힐때 로컬스토리지 삭제하는 useEffect
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.clear(); // 로컬스토리지 삭제
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/*" element={<EmptyPage/>}/>
      </Routes>
      <Footer/>
      <GoToUpButton/>
    </BrowserRouter>
  );
}

export default App;
