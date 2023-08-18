import { useState, useEffect } from "react";
import "./App.css";

function Github({ name, location, avatar }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src={avatar} alt="github avatar" />
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  //fetch is build in the browser
  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/bipinshr`)
      .then((response) => response.json()) //trun the responsed into json
      .then(setData) //(data) => setData(data)) same thing as this as the data is repeted short form
      .then(() => setLoading(false)) // set data as it is no longer loading
      .catch(setError);
  }, []); // Only make a request for this data once when our application first renders.
  //So that we donot make many api request

  if (loading) return <h1>loading</h1>;
  if (error) return <pre>JSON.stringify(error)</pre>;
  if (!data) return null;
  //else
  // return <pre>{JSON.stringify(data, null, 2)}</pre>; //nu;;.2 for formating
  return <Github name={data.login} location={data.created_at} avatar={data.avatar_url} />;
}

export default App;
