import logo from './logo.svg';
import './App.css';
import './index.scss';
import Login from './pages/Login';
import Layout from './pages/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Button } from 'antd';
import { AuthComponent } from './components/AuthComponent';
import Home from './pages/Home';
import Publish from './pages/Publish';
import Article from './pages/Article';
import { HistoryRouter, history } from './utils/history'


function App() {
  return (
    <div className="App">
      <HistoryRouter history={history}>
        <Routes>
          {/* Layout需要鉴权处理 */}
          <Route path='/*' element={
            <AuthComponent>
              <Layout />
            </AuthComponent>
          }>
            <Route index element={<Home />} />
            <Route path="article" element={<Article />} />
            <Route path="publish" element={<Publish />} />
          </Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </HistoryRouter>
    </div>
  );
}

export default App;
