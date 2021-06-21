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
        <div style={{ width: value * 3 }} className="progression__line"> </div>
        <div className="progression__circle">
          {/* <div className="left"></div> */}
          {/* <div className="right"></div> */}
          <p className={`${change ? "value progression__circle__open" : "value progression__circle__unset"}`}>{value}%</p>
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
