import { useState, useEffect, useReducer, useRef } from "react";
import "./App.css";

function App() {
  const [weather, setweather] = useState("Sunny");
  const [checked, setChecked] = useReducer((checked) => !checked, false);
  const txtTitile = useRef();
  const hexColor = useRef();
  const submit = (e) => {
    e.preventDefault();
    const title = txtTitile.current.value;
    const hec = hexColor.current.value;

    alert(`${title}, ${hec}`);
    txtTitile.current.value = "";
    hexColor.current.value = "";
  };
  useEffect(() => {
    console.log(`wether right now is ${weather}`);
  }, [weather]);

  return (
    <div className="App">
      <h1>Current weather is {weather}</h1>
      <button onClick={() => setweather("Raining")}> Raining</button>
      <button onClick={() => setweather("Snowing")}> Snowing</button>
      <input type="checkbox" value={checked} onClick={setChecked} />
      <label>{checked ? "checked" : "not Checked"}</label>

      <form onSubmit={submit}>
        <input ref={txtTitile} type="text" placeholder="color" />
        <input ref={hexColor} type="color" />
        <button> Add</button>
      </form>
    </div>
  );
}

export default App;
