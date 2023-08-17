import { useState } from "react";
import "./App.css";

function App() {
  const [weather, setweather] = useState("Sunny");
  return (
    <div className="App">
      <h1>Current weather is {weather}</h1>
      <button onClick={() => setweather("Raining")}> Raining</button>
      <button onClick={() => setweather("Snowing")}> Snowing</button>
    </div>
  );
}

export default App;
