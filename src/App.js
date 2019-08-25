import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'


function App() {
  const [data, setData] = useState({
    title: '',
    url: '',
    explanation: '',
    copyright: '',
    date: ''
  })

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=j53v9dvTGZXp3UeeJV9KgkvXtf35lawivkMwfwtS')
      .then(res => {
        return setData(res.data)
      })
      .catch(err => {
        console.log(err)
        return err
      })
  }, [])

  console.log(data)

  return (
    <div className="App">
      <h1 className='tile'>{data.title}</h1>
      <img className='image' src={data.url} alt='nasa pic of day' />
      <p className='explanation'>{data.explanation}</p>
      <h4 className='copyright'>{data.copyright}</h4>
      <p className='date'>{data.date}</p>
    </div>
  );
}

export default App;
