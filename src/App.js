import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./Pages/Cart/Cart";
import Details from "./Pages/Details/Details";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Shared/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details/:id" element={<Details />} />

      </Routes>
    </div>
  );
}

export default App;
