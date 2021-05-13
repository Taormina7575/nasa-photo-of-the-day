import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Header from './components/header/Header'
import Daypost from './components/dayphoto/Daypost'
import Explore from './components/Explore/Explore'

function App() {
  const [photoData, setPhotoData] = useState([])

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=PU1Utgzy29BvYYRZS5iKtwXlyL8UjkryW2W5MCRj&date')
    .then(res => {
      setPhotoData(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div className="App">
      <Header />
      <Daypost props={photoData}/>
      <Explore />
    </div>
  );
}

export default App;
