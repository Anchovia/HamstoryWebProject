import Header from "./component/header/Header";
import Main from "./component/main/Main";
import Login from "./component/login/Login";
import Footer from "./component/footer/Footer";
import GoToUpButton from "./component/button/GoToUpButton";

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmptyPage from "./component/emptyPage/EmptyPage";

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
