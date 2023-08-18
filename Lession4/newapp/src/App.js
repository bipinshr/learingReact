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
const nepal_mountains = [
  { name: "Mount Everest", altitude: 8848 },
  { name: "Kangchenjunga", altitude: 8586 },
  { name: "Lhotse", altitude: 8516 },
  { name: "Makalu", altitude: 8485 },
  { name: "Cho Oyu", altitude: 8188 },
  { name: "Dhaulagiri", altitude: 8167 },
  { name: "Manaslu", altitude: 8163 },
  { name: "Annapurna", altitude: 8091 },
  { name: "Gyachung Kang", altitude: 7952 },
  { name: "Pumori", altitude: 7161 },
];

function List({ data, renderItem, renderEmpty }) {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item) => (
        <li key={item.name}>{renderItem(item)}</li>
      ))}
    </ul>
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
  return (
    <div>
      <Github name={data.login} location={data.created_at} avatar={data.avatar_url} />
      <h1>Mountains in Nepal</h1>
      <List
        data={nepal_mountains}
        renderEmpty={<p>Cannot get deta for Nepal Montain right now</p>}
        renderItem={(item) => (
          <>
            {item.name} - {item.altitude} ft.
          </>
        )}
      />
    </div>
  );
}

export default App;
