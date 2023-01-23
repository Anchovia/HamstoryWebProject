import TopNavigationBar from "./component/navigation/TopNavigationBar";
import MainIndex from "./component/mainIndex/MainIndex";

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
