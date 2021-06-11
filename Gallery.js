import React, {useState} from 'react';
import Images from "./Images";
import './App.css';
import './Gallery.css';
import './Images.js';

const Gallery = () => {
  const [selectedImg, SetselectedImg] = useState(Images[0].picture, Images[0].descr)
  const [selectedDescr, SetselectedDescr] = useState(Images[0].descr)

  const handleSetDescr = (event) => {
    SetselectedDescr(event.target.value)
  }

  return (
  <div className="Gallery">
  <div className="container"> 
  {Images.map((img, index)=>(
            <img 
            style={{border: selectedImg === img.picture ? "4px solid grey" : ""}} 
            key={index} 
            src={img.picture}
            onClick={() => {SetselectedImg(img.picture);
           SetselectedDescr(img.descr)}} ></img>
  ))}
      <div className="imgContainer">
        <div className="selectedDescr"  >
        {selectedDescr} 
        </div>
          <div className="selectedContainer">
          <img src={selectedImg} alt="Selected" className="selected"/>
         
          </div>
      </div>
  </div>
  </div>
  )
}

export default Gallery;