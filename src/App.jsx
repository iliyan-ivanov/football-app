import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "./config/firebase";
import { onAuthStateChanged } from "firebase/auth";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Create from "./components/Create/Create";
import Categories from "./components/Categories/Categories";
import NewsDetails from "./components/NewsDetails/NewsDetails";
import Footer from "./components/Footer/Footer";
import AuthContext from "./contexts/AuthContext";
import "./App.css";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, setUser);
  }, []);
  
  return (
    <AuthContext.Provider value={user}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<Create />} />
        <Route path="/europianfootball" element={<Categories category="Europian Football" />}/>
        <Route path="/bulgarianfootball" element={<Categories category="Bulgarian Football" />}/>
        <Route path="/nationalteams" element={<Categories category="National Teams" />}/>
        <Route path="/:newsID" element={<NewsDetails />} />
      </Routes>
      <Footer />
    </AuthContext.Provider>
  );
}

export default App;
