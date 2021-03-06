import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import key from './secret/key'
import Header from './header/header'

function App() {
  const onMount = 'mount'
  const [data, setData] = useState({
    title: '',
    url: '',
    explanation: '',
    copyright: '',
    date: ''
  })

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
      .then(res => {
        return setData(res.data)
      })
      .catch(err => {
        console.log(err.response)
        return err
      })
  }, [onMount])

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${data.date}`)
    .then(res => {
      return setData(res.data)
    })
    .catch(err => {
      console.log(err.response)
      return err
    })
  }, [data.date])

  return (
    <div className="App">
      {/* <input type='date' value={data.date} onChange={(e) => setData({date: e.target.value})}/>
      <h1 className='tile'>{data.title}</h1> */}
      <Header date={data.date} setData={setData} title={data.title} />
      { (data.media_type === 'image') ? <img className='image' src={data.url} alt='nasa pic of day' /> : <iframe title='video' src={data.url}></iframe> }
      <p className='explanation'>{data.explanation}</p>
      <h4 className='copyright'>{data.copyright}</h4>
      <p className='date'>{data.date}</p>
    </div>
  );
}

export default App;