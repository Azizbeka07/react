import React from "react";
import Header from "./components/Header";
import Collection from "./components/Collection";
import Footer from "./components/Footer";
import HeadPhones from "./components/HeadPhones";
import LatestProduction from "./components/LatestProduction";

function App() {
  return (
    <>
      <Header />
      <Collection />
      <HeadPhones />
      <LatestProduction />
    </>
  );
}

export default App;
