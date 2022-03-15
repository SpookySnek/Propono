import React, { useState } from 'react'
import axios from 'axios'
import { Picture } from '../app';

const AddMovie = () => {

    const [picture, setPicture] = useState<Picture>();
    const [name, setName] = useState<string>("");
    const [title, setTitle] = useState<string>("");

    const handleAdd = async () => {
        console.log("name, title" + name +" "+  title);
        await axios.post("https://localhost:7260/api/picture", {"Title": name,
        "UploadDate": "2022-03-14T15:32:03.454Z",
        "ImgUrl": "blabla"})
    }
    
    

    console.log("picture " + picture);
    
  return (
    <div>
        <input type="text" value={picture?.title} onChange={(e) => setTitle(e.target.value)}/>
        {/* <input type="text" value={picture?.genre?.name} onChange={(e) => setName(e.target.value)}/> */}
        <button onClick={handleAdd}>ADD</button>
    </div>
  )
}

export default AddMovie
