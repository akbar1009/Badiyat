import search from '../imgs/search btn.svg'
import hero from '../imgs/heroo.png'
import { useState } from 'react'
export default function Hero({qiymat,setQiymat}){
 
    return(
        <div className="container">
            <div className="hero">
                <img src={hero}/>
                <div className='search'>
                    <h4 className='hero-h4'>Qidirish</h4>
                    <div className='input-div'>
                     
                        <input value={qiymat} onChange={(e) => setQiymat(e.target.value) } className='search-input' placeholder='Adiblar, kitoblar, audiolar, maqolalar...'/>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}