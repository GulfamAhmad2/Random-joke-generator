import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [data, setData] = useState({});

  const joke = () => {
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")
      .then((res) => res.json())
      .then((items) => {
        setData(items);
      });
  };

  useEffect(() => {
    joke();
  }, []);

  console.log(data);
  return (
    <>
      <div className="container">
        <h2>Random Joke</h2>
        <p>"{data.joke}"</p>
        <button onClick={joke}>Get Joke</button>
      </div>
    </>
  );
}

export default App;
