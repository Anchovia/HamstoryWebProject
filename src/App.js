/*
  설명: App.js
*/

// 컴포넌트 import
import GoToUpButton from "./component/button/GoToUpButton";

// 모듈 import
import { BrowserRouter } from 'react-router-dom'

// 라우팅 import
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AppRoutes/>
      <GoToUpButton/>
    </BrowserRouter>
  );
}

export default App;