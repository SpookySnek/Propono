import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import PictureList from '../pictureList';
import AddPicture from '../addPictures/addPictures';

export interface Picture {
  id: number,
  title: string,
  uploadDate: Date,
  imgUrl: string,
  tag: string
}


function App() {

  const [pictures, setPictures] = useState<Picture[]>([]);

  useEffect(() => {
    const dataFetch = async() => {
      const resp = await axios.get('https://localhost:7260/api/picture');

      setPictures(prev => (resp.data))
    }
    dataFetch();
  }, [])
  console.log("I rendered")
  return (
    <div className="App">
      <AddPicture/>
      <PictureList datalist={pictures}/>
    </div>
  );
}

export default App;
