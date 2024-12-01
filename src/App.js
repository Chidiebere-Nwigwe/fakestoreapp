import './App.css';
import FetchData from './components/FetchData';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/products' element={<FetchData/>}>

        </Route>
        <Route path='/products/:id' element={<ProductDetails />}/>
        <Route path='/' element={<Navigate to="/products"/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
