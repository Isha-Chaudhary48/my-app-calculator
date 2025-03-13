import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  function getValue(event) {
    console.log(event.target.value);
    setData(data.concat(event.target.value));
  }

  function calculation() {
    setData(eval(data).toString());
  }
  function deleteOne() {
    setData(data.slice(0, -1));
  }
  function clearData() {
    setData("");
  }
  return (
    <>
      <div className="calculatorGrid">
        <div className="output">
          <div className="currentOperand">{data}</div>
        </div>
        <button onClick={clearData} className="spanTwo">
          AC
        </button>
        <button onClick={deleteOne}>DEL</button>
        <button onClick={getValue} value="*">
          *
        </button>
        <button onClick={getValue} value="2">
          2
        </button>
        <button onClick={getValue} value="3">
          3
        </button>

        <button onClick={getValue} value="1">
          1
        </button>

        <button onClick={getValue} value="+">
          +
        </button>
        <button onClick={getValue} value="5">
          5
        </button>
        <button onClick={getValue} value="6">
          6
        </button>
        <button onClick={getValue} value="4">
          4
        </button>

        <button onClick={getValue} value="-">
          -
        </button>
        <button onClick={getValue} value="8">
          8
        </button>
        <button onClick={getValue} value="9">
          9
        </button>

        <button onClick={getValue} value="7">
          7
        </button>

        <button onClick={getValue} value=".">
          .
        </button>
        <button onClick={getValue} value="0">
          0
        </button>
        <button onClick={getValue} value="/">
          /
        </button>
        <button onClick={calculation} className="spanTwo">
          =
        </button>
      </div>
    </>
  );
}

export default App;
