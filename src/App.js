import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/navbar/Navbar";

function App() {
  useEffect(() => {
    window.onscroll = () => {
      showHiddenItems();
    };
  }, []);

  const showHiddenItems = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((element) => observer.observe(element));
  };

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={HomePage} />\
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
