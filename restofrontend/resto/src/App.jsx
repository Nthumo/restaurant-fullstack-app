import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./components/homepage";
import MenuPage from "./pages/menu";
import EventsPage from "./pages/event";
import ShopPage from "./pages/shop";




const App = () => {
  const location = useLocation();
  const isMenuPage = location.pathname === "/menu";

  return(
    <>
    <div className="relative bg-center bg-fixed bg-gray-400  min-h-screen">
      <div className="relative z-10 flex flex-col justify-center min-h-screen">
        {!isMenuPage && <Header/>}          
        <main className="flex-grow overflow-y-auto">
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/menu" element={<MenuPage />}/>
            <Route path="/events" element={<EventsPage />}/>
            <Route path="/shop" element={<ShopPage />}/>
          </Routes> 
        </main>
        {!isMenuPage && <Footer />}
      </div>
    </div>
    </>
  );
};

const AppWrapper = () => (
  <Router basename="">
    <App />
  </Router>
);
export default AppWrapper;