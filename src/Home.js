import React from "react";
import BoxInfo from "./components/BoxInfo";
import Collection from "./components/Collection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeadPhones from "./components/HeadPhones";
import LatestProduction from "./components/LatestProduction";
import Subscribe from "./components/Subscribe";

const Home = () => {
  return (
    <>
      <Header />
      <Collection />
      <HeadPhones />
      <LatestProduction />
      <BoxInfo />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Home;
