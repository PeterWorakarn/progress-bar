import React, { useState } from 'react';

function App() {
  const [value, setvalue] = useState(0)
  const [change, setchange] = useState(true)

  if (value < 0) {
    setvalue(0)
  }
  else if (value > 100) {
    setvalue(100)
  }

  const decreaseHandler = (prevState) => {
    setvalue(prevState => prevState - 5)
    setchange(!change)
  }
  const increaseHandler = (prevState) => {
    setvalue(prevState => prevState + 5)
    setchange(!change)

  }

  return (
    <div className="container">
      <main className="progression">
        <div className="progression__circle">
          <svg>
            <circle className={`${change ? "open" : "unset"}`} cx="150" cy="150" r="150"></circle>
            <circle className={`${change ? "open" : "unset"}`} style={{ strokeDashoffset: `calc(950 - (950 * ${value})/100)` }} cx="150" cy="150" r="150"></circle>
          </svg>
          <div className="number">
            <p className={`${change ? "value open" : "value unset"}`}>{value}%</p>
          </div>
        </div>
      </main>
      <div className="control">
        <div onClick={decreaseHandler} className="control__decrease">-</div>
        <div onClick={increaseHandler} className="control__increase">+</div>
      </div>
    </div>
  );
}

export default App;
