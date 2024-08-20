import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "./config/firebase";
import { onAuthStateChanged } from "firebase/auth";

import HomePage from "./components/HomePage/HomePage";
import Header from "./components/Header/Header";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import EditPage from "./components/EditPage/EditPage";
import CreatePage from "./components/CreatePage/CreatePage";
import Categories from "./components/Categories/Categories";
import NewsDetailsPage from "./components/NewsDetailsPage/NewsDetailsPage";
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
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/:newsId/edit" element={<EditPage />} />
        <Route path="/europianfootball" element={<Categories category="Europian Football" />}/>
        <Route path="/bulgarianfootball" element={<Categories category="Bulgarian Football" />}/>
        <Route path="/nationalteams" element={<Categories category="National Teams" />}/>
        <Route path="/:newsId" element={<NewsDetailsPage />} />
      </Routes>
      <Footer />
    </AuthContext.Provider>
  );
}

export default App;
