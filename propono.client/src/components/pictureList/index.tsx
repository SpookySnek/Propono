import React from 'react'
import { Picture } from '../app'

interface PictureListProps {
    datalist : Picture[]
}

const PictureList = ({datalist}: PictureListProps) => {
    if (datalist.length === 0){
        return <span>Loading images...</span>
    }

  return (
      <div className="wrapper">
        {datalist.map((e:Picture) => <div className="card">
            <h1> {e.title} </h1>
            <h3>{e.tag}</h3>
            <h3>{e.uploadDate}</h3>
            <img src={e.imgUrl} alt="Image"/>
        </div>)}
      </div>
  )
}

export default PictureList