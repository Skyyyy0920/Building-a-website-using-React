import logo from './logo.svg';
import './App.css';
import './index.scss';
import Login from './pages/Login';
import Layout from './pages/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Button } from 'antd';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Button type="primary">Button</Button>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/' element={<Layout />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
