import React, { useEffect, useState } from "react";

const About = () => {
  const [data, setData] = useState(null)

// Application Programming Interface

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => setData(json))
  }, []);

  console.log(data);

  return (
    <div className="container">
      <div className="user-list">
        {data?.map((el) => {
          return (
            <div key={el.id}>
               <img src={el.url}/> 
               <p>{el.username}</p>
               <span>{el.phone}</span> 
              <a href={el.title}
              target="_blank"
              rel='noopener noreferrer'>
                {el.website}
          </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default About;