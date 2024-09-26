import React from 'react'
import "./loader.css"
import image from "./img/bg1.jpg" 

export default function Loader() {
  return (
    <div className='loader-background'>
        <img src={image} alt="" />
        <div className="shadow"></div>
        <div className="main">
            <span className="title">Zephyr<span>X</span></span>

            <div class="loader"></div>

        </div>
    </div>
  )
}
