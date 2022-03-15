import React, { useState } from 'react'
import axios from 'axios'
import { Picture } from '../app';

const AddMovie = () => {

    const [picture, setPicture] = useState<Picture>();
    const [name, setName] = useState<string>("");
    const [imgUrl, setImgUrl] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [tag, setTag] = useState<string>("");

    const handleAdd = async () => {
        console.log("name, title" + name +" "+  imgUrl);
        await axios.post("https://localhost:7260/api/picture", {"title": title,
        "uploadDate": new Date(),
        "imgUrl": imgUrl,
        "tag": tag})
        window.location.reload()
    }
    
    

    console.log("picture " + picture);
    
  return (
    <div>
        <input type="text" value={picture?.title} onChange={(e) => setTitle(e.target.value)} placeholder="Title"/>
        <input type="text" value={picture?.imgUrl} onChange={(e) => setImgUrl(e.target.value)} placeholder="Image URL"/>
        <input type="text" value={picture?.tag} onChange={(e) => setTag(e.target.value)} placeholder="Tags (Optional)"/>
        <button className="addButton" onClick={handleAdd}>Add image</button>
    </div>
  )
}

export default AddMovie
