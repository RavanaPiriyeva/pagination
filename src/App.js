import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Product from "./Components/Product";
import Supplier from "./Components/Supplier";
import AddSupplier from "./Components/AddSupplier";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Supplier />} />
        <Route
          path="/addsupplier"
          element={ <AddSupplier /> }
        />
      </Routes>
    </>
  );
}

export default App;
