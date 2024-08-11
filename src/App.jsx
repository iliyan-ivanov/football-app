import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Create from "./components/Create/Create";
import Categories from "./components/Categories/Categories";
import NewsDetails from "./components/NewsDetails/NewsDetails";
import Footer from "./components/Footer/Footer";
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
      <Route path="/europianfootball" element={<Categories category="Europian Football" />} />
      <Route path="/bulgarianfootball" element={<Categories category="Bulgarian Football" />} />
      <Route path="/nationalteams" element={<Categories category="National Teams" />} />
      <Route path="/:newsID" element={<NewsDetails />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
