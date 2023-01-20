import logo from './logo.svg';
import './App.css';
import './index.scss';
import Login from './pages/Login';
import Layout from './pages/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Button } from 'antd';
import { AuthComponent } from './components/AuthComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Button type="primary">Button</Button>
        <Routes>
          {/* Layout需要鉴权处理 */}
          <Route path='/*' element={
            <AuthComponent>
              <Layout />
            </AuthComponent>
          }></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
