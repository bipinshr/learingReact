import { useState, useEffect, useReducer } from "react";
import "./App.css";
// import { useRef } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return [
    { value, onChange: (e) => setValue(e.target.value) },
    //cleanup
    () => setValue(initialValue),
  ];
}
function App() {
  const [ttitle, setTtitle] = useState("");
  const [color, setColor] = useState("#000000");
  const [weather, setweather] = useState("Sunny");
  const [checked, setChecked] = useReducer((checked) => !checked, false);

  // const txtTitile = useRef();
  // const hexColor = useRef();
  const submit = (e) => {
    e.preventDefault();
    // const title = txtTitile.current.value;
    // const hec = hexColor.current.value;

    // alert(`${title}, ${hec}`);
    // txtTitile.current.value = "";
    // hexColor.current.value = "";
    alert(`${ttitle}, ${color}`);
    setTtitle("");
    setColor("#000000");
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

      {/* <form onSubmit={submit}>
        <input ref={txtTitile} type="text" placeholder="color" />
        <input ref={hexColor} type="color" />
        <button> Add</button>
      </form> */}
      {
        <form onSubmit={submit}>
          <input value={ttitle} type="text" placeholder="color" onChange={(event) => setTtitle(event.target.value)} />
          <input value={color} type="color" onChange={(event) => setColor(event.target.value)} />
          <button> Add</button>
        </form>
      }
    </div>
  );
}

export default App;
