import { useState, useEffect, useReducer } from "react";
import "./App.css";

function App() {
  const [weather, setweather] = useState("Sunny");
  const [checked, setChecked] = useReducer((checked) => !checked, false);
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
    </div>
  );
}

export default App;
