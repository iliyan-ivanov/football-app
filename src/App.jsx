import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Header from "./Header/Header";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Create from "./Create/Create";
import Categories from "./Categories/Categories";
import Footer from "./Footer/Footer";
import "./App.css";
import NewsDetails from "./NewsDetails/NewsDetails";

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
