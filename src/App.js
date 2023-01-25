import TopNavigationBar from "./component/header/TopNavigationBar";
import MainIndex from "./component/main/MainIndex";
import GoToUpButton from "./component/etc/GoToUpButton";

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <TopNavigationBar/>
      <Routes>
        <Route path="/" element={<MainIndex/>}/>
      </Routes>
      <GoToUpButton/>
    </BrowserRouter>
  );
}

export default App;
