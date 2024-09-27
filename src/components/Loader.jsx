import React from 'react'
import "./loader.css"
import image from "./img/bg1.jpg"
import tg from "./img/icons/telegram-logo.png"
import ins from "./img/icons/instagram.png"
import yt from "./img/icons/youtube.png"

export default function Loader() {
    return (
        <div className='loader-background'>
            <img className='back' src={image} alt="" />
            <div className="shadow"></div>
            <div className="main">
                <span className="title">Zephyr<span>X</span></span>
                <span className="desc">WE ARE COMING...</span>
                <div class="loader"></div>
                <span className="footer-text">GEM ERA</span>
                <div className="icons">
                    <a href="https://t.me/ZephyrXgame">
                        <div className="icon">
                            <img src={tg} alt="" />
                        </div>
                    </a>

                    <a href="https://www.instagram.com/zephyrxgem?igsh=MWQ4NnB2bTVzYzhqOQ==">
                        <div className="icon">
                            <img src={ins} alt="" />
                        </div>
                    </a>
                    <a href="https://www.youtube.com/@ZephyrXgame">
                        <div className="icon">
                            <img src={yt} alt="" style={{ "padding-top": "5px" }} />
                        </div>
                    </a>

                </div>
            </div>
        </div>
    )
}
