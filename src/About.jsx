import React, { useState } from "react";

const About = () => {
  const [count, setCount] = useState(0);
  const [firstCount, setFirstCount] = useState(0);
  const [result, setResult] = useState(0);

  const addNumbers = () => {
    return setResult(count + firstCount);
  };

  function reset () {
    setCount(0)
    setFirstCount(0)
    setResult(0)
  }
  return (
    <section className="background">
      <div className="container">
      <div className="contents fd-col mt-5">
        <div className="count-box">
          <h3 className="firstCount">{firstCount}</h3>
          <p className="count-plus">+</p>
          <h3 className="count">{count}</h3>
          <p className="count-plus">=</p>
          <h3 className="result">{result}</h3>
        </div>
        <div className="btn-box">
          <div className="btn-group">
            <button
              className="btn btn-green"
              onClick={() => setCount(count + 1)}
              disabled={count === 100}
            >
              Increment
            </button>
            <button
              className="btn btn-red"
              onClick={() => setCount(count - 1)}
              disabled={count === 0}
            >
              Decrement
            </button>
            <button className="btn btn-yellow" onClick={() => reset(0)}>
              Reset
            </button>
          </div>
          <button className="btn btn-yellow" onClick={addNumbers}>
            Result
          </button>
          <div className="btn-group">
            <button
              className="btn btn-green"
              onClick={() => setFirstCount(firstCount + 1)}
              disabled={firstCount === 100}
            >
              Increment
            </button>
            <button
              className="btn btn-red"
              onClick={() => setFirstCount(firstCount - 1)}
              disabled={firstCount === 0}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
      <div className="content"></div>
    </div>
    </section>
  );
};

export default About;
