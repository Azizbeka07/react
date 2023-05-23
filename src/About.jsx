import React, { useEffect, useState } from "react";
import CommentList from "./components/CommenList";

const About = () => {
  const [data, setData] = useState([])

// Application Programming Interface

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(json => setData(json))
  }, []);

  console.log(data);

  return (
    <div className="container">
      <div className="user-list">
        {data?.map((el) => {
          return (
            <div key={el.id} className="wrapper">
              <div className="box">
              <i className="coment">{el.body}</i>
              <h2 className="name">{el.name}</h2>
             <a className="email" href={`mailto:${el.email}`}>{el.email}</a>
              </div>
            </div>
          )
        })}
      </div>
      <CommentList comments={data} />
    </div>
  )
}

export default About;