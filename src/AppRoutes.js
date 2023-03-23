// 모듈 import
import { Route, Routes } from 'react-router-dom';

// 컴포넌트 import
import Main from './component/main/Main';
import Login from './component/login/Login';
import Community from './component/community/Community';
import EmptyPage from './component/emptyPage/EmptyPage';
import CommunityLatestPost from './component/community/CommunityLatestPost';
import CommunityPosting from './component/community/CommunityPosting';
import PostDetail from './component/post/PostDetail';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/login" element={<Login />} />
    <Route path="/community" element={<Community />} />
    <Route path="/community/latestPost" element={<CommunityLatestPost />} />
    <Route path="/community/latestPost/:postId" element={<PostDetail/>} />
    <Route path="/community/posting" element={<CommunityPosting />} />
    <Route path="/*" element={<EmptyPage />} />
  </Routes>
);

export default AppRoutes;