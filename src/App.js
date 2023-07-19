// module import
import { BrowserRouter } from 'react-router-dom'

// route import
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AppRoutes/>
    </BrowserRouter>
  );
}

export default App;