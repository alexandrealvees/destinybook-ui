import './App.css';
import Login from './containers/Login';
import Home from './containers/Home';
import Quartos from './containers/Quartos';
import Clientes from './containers/Clientes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/Quartos" element={<Quartos />} />
        <Route path='/Clientes' element={<Clientes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
