import React, { useState } from "react";
import Delete from "../src/assets/image/delete.png";
import arrowDown from "../src/assets/image/arrow-down.png";

const About = () => {
  const [count, setCount] = useState(0);
  const [firstCount, setFirstCount] = useState(0);
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState("+");

  function addNumbers () {
    switch (operator) {
    case  "+":
    setResult(count + firstCount)
      break;
     case "-":
      setResult(count - firstCount)
      break;
     case "*":
      setResult(count * firstCount);
      break;
     case "/":
      setResult(count / firstCount)
  };
  }

  function reset() {
    setCount(0);
    setFirstCount(0);
    setResult(0);
  }
  return (
    <div className="container">
      <div className="contents fd-col mt-5 background">
          
          <div className="count-box">
            <h3 className="firstCount">{count}</h3>
            <button className="count-plus">{operator}</button>
            <h3 className="count">{firstCount}</h3>
            <p className="count-plus">=</p>
            <h3 className="result">{result}</h3>
          </div>
        <div className="btn-box">
        <div className="increase-box">
            <button className="color operator" onClick={() => setOperator("-")}>
              -
            </button>
            <button className="color operator" onClick={() => setOperator("*")}>
              *
            </button>
            <button className="color operator" onClick={() => setOperator("/")}>
              /
            </button>
            <button className="color operator" onClick={() => setOperator("+")}>
              +
            </button>
          </div>
          <div className="btn-group">
            <div className="arrow-box">
              <button
                className="btn btn-yellow"
                onClick={() => setFirstCount(firstCount + 1)}
                disabled={count === 100}
              >
                <img src={arrowDown} alt="img" className="arrowTop" />
              </button>
              <button
                className="btn btn-yellow"
                onClick={() => setFirstCount(firstCount - 1)}
                disabled={firstCount === 0}
              >
                <img src={arrowDown} alt="img" className="arrow" />
              </button>
              <button></button>
            </div>
            <button className="btn btn-yellow" onClick={() => reset(0)}>
              <img src={Delete} alt="img" className="delete" />
            </button>
          </div>
          <div className="box-group">
            <button className="btn btn-yellow" onClick={addNumbers}>
              =
            </button>
            <button
              className="btn btn-yellow"
              onClick={() => setCount(count + 1)}
              disabled={firstCount === 100}
            >
              <img src={arrowDown} alt="img" className="arrowTop" />
            </button>
            <button
              className="btn btn-yellow"
              onClick={() => setCount(count - 1)}
              disabled={count === 0}
            >
              <img src={arrowDown} alt="img" className="arrow" />
            </button>
          </div>
        </div>
      </div>
      <div className="content"></div>
    </div>
  );
};

export default About;
