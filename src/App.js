import MainIndex from "./component/MainIndex";
import TopNavigationBar from "./component/TopNavigationBar";

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <TopNavigationBar/>
      <Routes>
        <Route path="/" element={<MainIndex/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
