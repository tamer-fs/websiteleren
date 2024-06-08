import React, { useEffect } from "react";
import Hero from "./contents/hero/Hero";

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
      <Hero />
    </>
  );
}

export default App;
