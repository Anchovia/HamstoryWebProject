// module import
import { BrowserRouter } from 'react-router-dom'

// route import
import AppRoutes from "./AppRoutes";

// component import
import GoToUpButton from "./component/button/GoToUpButton";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AppRoutes/>
      <GoToUpButton/>
    </BrowserRouter>
  );
}

export default App;