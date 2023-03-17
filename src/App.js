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

function App() {
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
