import { Route, Routes } from 'react-router-dom';
import Main from './component/main/Main';
import Login from './component/login/Login';
import Community from './component/community/Community';
import EmptyPage from './component/emptyPage/EmptyPage';
import CommunityLatestPost from './component/community/CommunityLatestPost';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/login" element={<Login />} />
    <Route path="/community" element={<Community />} />
    <Route path="/community/latestPost" element={<CommunityLatestPost />} />
    <Route path="/*" element={<EmptyPage />} />
  </Routes>
);

export default AppRoutes;