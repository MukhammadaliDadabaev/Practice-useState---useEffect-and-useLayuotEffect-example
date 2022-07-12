import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // STATE
  const [bg, setBg] = useState(false);
  const [ranNumber, setRanNumber] = useState(0);

  // STYLES
  const bgfon = {
    background: bg ? "brown" : "rgb(109, 56, 207)",
  };

  // useEffect Update-bo`lganda ishlaydi
  useEffect(() => {
    if (ranNumber === 0) {
      setRanNumber(Math.floor(Math.random() * 1000));
    }
  }, [ranNumber]);
  console.log("random: -", ranNumber);
  return (
    <div className="App">
      <div className="wrapper" style={bgfon}>
        <h1>RANDOM NUMBER</h1>
        <h2>
          &gt;<span>{ranNumber}</span>&lt;
        </h2>
        <button onClick={() => setRanNumber(0)}>&gt; random-number &lt;</button>
      </div>
      <button onClick={() => setBg(!bg)} className=" btn-info"></button>
    </div>
  );
}

export default App;
