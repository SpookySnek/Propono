import React from 'react'
import ReactCardFlip from 'react-card-flip';
import { Picture } from '../app'
import axios from 'axios'

interface PictureListProps {
    datalist: Picture[]
}

const handleDelete = async (id) => {
    await axios.delete("https://localhost:7260/api/picture/" + id, { data: id }
    ); window.location.reload()
}

const PictureList = ({ datalist }: PictureListProps) => {
    if (datalist.length === 0) {
        return <span>Loading images...</span>
    }

    return (
        <>
            {datalist.map((e: Picture) =>
                <div className="wrapper">
                    <div className="card">
                        <div className="flipped">
                            <h1>{e.title} </h1>
                            <h3>{e.tag}</h3>
                            <h3>{e.uploadDate.toString().slice(0, 10)}</h3>
                            <button className="cardButtons" id="text" onClick={() => window.open(e.imgUrl)}>Full Size</button>
                            <button className="cardButtons" id="text" onClick={() => handleDelete(e.id)}>Delete</button>
                        </div>
                        <div className="unflipped">
                            <img src={e.imgUrl} alt="Image" style={{ width: 300, height: 200 }} />
                        </div>
                    </div>
                </div>)}
        </>
    )
}

export default PictureList