import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import PictureList from '../picturesList';
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
    const dataFetch = async () => {
      const resp = await axios.get('https://localhost:7260/api/picture');

      setPictures(prev => (resp.data))
    }
    dataFetch();
  }, [])
  console.log("I rendered")
  return (
    <>
      <header>
        <h1 className="headerText">Propono</h1>
      </header>
      <div className="App">
        <AddPicture />
        <div className="Content">
          <PictureList datalist={pictures} />
        </div>
      </div>
      <footer>
        <small>Created by Carl Morisbak Olsson for SALT @2022 </small>
        <a href="https://kopimistsamfundet.se/">
          <img alt="kopimi" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Kopimi-logo-SVG.svg/697px-Kopimi-logo-SVG.svg.png" height={20} width={20}/>
        </a>
      </footer>
    </>
  );
}

export default App;
