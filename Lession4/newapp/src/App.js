import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  //fetch is build in the browser
  useEffect(() => {
    fetch(`https://api.github.com/users/bipinshr`)
      .then((response) => response.json()) //trun the responsed into json
      .then(setData); //(data) => setData(data)) same thing as this as the data is repeted short form
  }, []); // Only make a request for this data once when our application first renders.
  //So that we donot make many api request
  if (data) {
    return <pre>{JSON.stringify(data, null, 2)}</pre>; //nu;;.2 for formating
  }
  return <h1>{data}</h1>;
}

export default App;
