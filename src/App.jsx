import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/HomePage';
import WritePage from './pages/WritePage';
import DetailPage from './pages/DetailPage';
import GatePage from './pages/GatePage';
import AuthCallbackPage from './pages/AuthCallbackPage';
import MyPage from './pages/MyPage';

function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/posts/:id" element={<DetailPage />} />
              <Route path="/login" element={<GatePage mode="login" />} />
              <Route path="/signup" element={<GatePage mode="signup" />} />
              <Route path="/auth/callback" element={<AuthCallbackPage />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/write" element={<WritePage />} />
                <Route path="/write/:id" element={<WritePage />} />
                <Route path="/mypage" element={<MyPage />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;
