import React, { useState } from "react";

const About = () => {
  const [count, setCount] = useState(0);
  const [firstCount, setFirstCount] = useState(0)

  return (
    <div className="container">
      <div className="content fd-col mt-5">
        <h3 className="count">{count}</h3>
        <div className="btn-group">
          <button className="btn btn-green" onClick={() => setCount(count + 1)}>
            Increment
          </button>
          <button className="btn btn-yellow" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
