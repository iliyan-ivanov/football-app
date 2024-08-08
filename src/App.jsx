import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Header from "./Header/Header";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Create from "./Create/Create";
import Footer from "./Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/create" element={<Create />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
