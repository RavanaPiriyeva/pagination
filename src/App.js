import logo from './logo.svg';
import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import Product from './Components/Product';

function App() {
  let loginControl = localStorage.getItem('isLogin');
  return (
    <> <Product/></>
     
  );
}

export default App;
