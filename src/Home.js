import React, { useEffect, useState } from "react";
import BoxInfo from "./components/BoxInfo";
import Collection from "./components/Collection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeadPhones from "./components/HeadPhones";
import LatestProduction from "./components/LatestProduction";
import Subscribe from "./components/Subscribe";
import CommentList from "./components/CommenList";

const Home = () => {
const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setData(json))
  })
console.log(data
  );
  return (
    <>
      <Header />
      <Collection />
      <HeadPhones />
      <LatestProduction />
      <BoxInfo />
      <Subscribe />
      <CommentList  />
      <Footer info={data} />
    </>
  );
};

export default Home; 
