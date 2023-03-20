import { Route, Routes } from 'react-router-dom';
import Main from './component/main/Main';
import Login from './component/login/Login';
import Community from './component/community/Community';
import EmptyPage from './component/emptyPage/EmptyPage';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/login" element={<Login />} />
    <Route path="/community" element={<Community />} />
    <Route path="/*" element={<EmptyPage />} />
  </Routes>
);

export default AppRoutes;