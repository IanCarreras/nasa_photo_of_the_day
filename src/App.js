import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'


function App() {
  const [data, setData] = useState()

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=j53v9dvTGZXp3UeeJV9KgkvXtf35lawivkMwfwtS')
      .then(res => {
        console.log(res.data)
        return setData(res.data)
      })
      .catch(err => {
        console.log(err)
        return err
      })
  }, [])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
