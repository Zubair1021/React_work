import React, { useState, useMemo } from "react";
import Header from "../Usememo/Header";

const Counter = () => {
  console.log("Counters Render");
  const [add, setadd] = useState(1);
  const [minus, setminus] = useState(20);

  const UpdateCountInc = () => {
    setadd(add + 1);
  };
  const UpdateCountDec = () => {
    setminus(minus - 1);
  };
  // This function has not a relation with minus but still run when minus state render but their is no need of it rendering so we use useMemo hook
  //  Usememo is a memoized function that store value in cache

  const MulValue = useMemo(() => {
    alert("Multiplication Updated...........");
    return add * 2;
  }, [add]);


  return (
    <div>
      <Header />
      <div className="Counter-body">
        <h2>
          ADD it <span>{add}</span>
        </h2>
        <button onClick={UpdateCountInc}>Plus+</button>
        <h2>
          SUB it <span>{minus}</span>
        </h2>
        <button onClick={UpdateCountDec}>Minus-</button>
        <h3>Multiply Add number by 2: {MulValue}</h3>
      </div>
    </div>
  );
};

export default Counter;
