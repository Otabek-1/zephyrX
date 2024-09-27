import React, { useState } from 'react'
import "./entrance.css"
import img from "./img/en1.jpg"

export default function FirstEntrance() {


    


    return (
        <div className='cards'>
            <img src={img} alt="" />
            <div className="shadow"></div>
            <div className="card-body">
                <h2>Welcome to new era</h2>
                <p>Collect types of gems build rich future for yourself with us.</p>
            </div>
        </div>
    )
}

