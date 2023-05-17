import React, {useEffect, useState} from "react"; 
import BoxInfo from "./components/BoxInfo"; 
import Collection from "./components/Collection"; 
import Footer from "./components/Footer"; 
import Header from "./components/Header"; 
import HeadPhones from "./components/HeadPhones"; 
import LatestProduction from "./components/LatestProduction"; 
import Subscribe from "./components/Subscribe"; 
// https://jsonplaceholder.typicode.com/photos 
 
const Home = () => { 
  const [data, setData] = useState([]) 
 
  useEffect(() => { 
    fetch("https://jsonplaceholder.typicode.com/photos") 
    .then(Response => Response.json()) 
    .then(json => setData(json)) 
  }) 
 
  return ( 
    <> 
      <Header /> 
      <Collection info={data} /> 
      <HeadPhones /> 
      <LatestProduction /> 
      <BoxInfo /> 
      <Subscribe /> 
      <Footer /> 
    </> 
  ); 
}; 
 
export default Home; 
