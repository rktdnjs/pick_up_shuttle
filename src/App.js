import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import KakaoOuathPage from './pages/KakaoOuathPage';
import MyPage from './pages/MyPage';
import PostListPage from './pages/PostListPage';
import PostDetailPage from './pages/PostDetailPage';
import PostWriteIntroPage from './pages/PostWriteIntroPage';
import PostWritePage from './pages/PostWritePage';
import ErrorPage from './pages/ErrorPage';
import PostDetailWriterPage from './pages/PostDetailWriterPage';
import routes from './constant/routes';

import './global.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<HomePage />} />
        <Route path={routes.login} element={<LoginPage />} />
        <Route path={routes.loginKakao} element={<KakaoOuathPage />} />
        <Route path={routes.mypage} element={<MyPage />} />
        <Route path={routes.post} element={<PostListPage />} />
        <Route path={routes.detailPost} element={<PostDetailPage />} />
        <Route path={routes.postWriter} element={<PostDetailWriterPage />} />
        <Route path={routes.postWriteIntro} element={<PostWriteIntroPage />} />
        <Route path={routes.postWrite} element={<PostWritePage />} />
        <Route path={routes.error} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
