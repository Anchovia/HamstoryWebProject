import Header from "./component/header/Header";
import Main from "./component/main/Main";
import Login from "./component/login/Login";
import EmptyPage from "./component/etc/EmptyPage";
import Footer from "./component/footer/Footer";
import GoToUpButton from "./component/etc/GoToUpButton";

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
