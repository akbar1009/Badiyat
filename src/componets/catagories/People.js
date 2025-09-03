import kitob from '../../imgs/kitob.svg'
import naush from '../../imgs/headphone.svg'
import img1 from '../../imgs/avloniy.png'
import img2 from '../../imgs/nusrat.png'
import img3 from '../../imgs/madazimov.png'
import img4 from '../../imgs/hamza.png'
import img5 from '../../imgs/cholpon.png'
import img6 from '../../imgs/fitrat.png'
import img7 from '../../imgs/abdulmajid.png'
import img8 from '../../imgs/qori.png'
import img9 from '../../imgs/qodiriy.png'
import img10 from '../../imgs/behbudiy.png'
import img11 from '../../imgs/hoji.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function People(){
    const [autors] = useState([
        {id:1,img:img1,name:"Abdulla Avloniy",strong:"1878-1934" },
        {id:2,img:img2,name:"Nusrat Rahmat",strong:"1878-1934" },
        {id:3,img:img3,name:"Rahmonberdi Madazimov",strong:"1878-1934" },
        {id:4,img:img4,name:"Hamza Hakimzoda Niyoziy",strong:"1878-1934" },
        {id:5,img:img5,name:"Abdulhamid Cho'lpon",strong:"1878-1934" },
        {id:6,img:img6,name:"Abdurauf Fitrat",strong:"1878-1934" },
        {id:7,img:img7,name:"Abdulmajid Qodiriy",strong:"1878-1934" },
        {id:8,img:img8,name:"Munavvarqori Abdurashidxonov",strong:"1878-1934" },
        {id:9,img:img9,name:"Abdulla Qodiriy",strong:"1878-1934" },
        {id:10,img:img10,name:"Mahmuxo’ja Behbudiy",strong:"1878-1934" },
        {id:11,img:img11,name:"Hoji Muin",strong:"1878-1934" },
    ])
    return(
        <div>
            <ul className="people-list">
                {autors.map((autor)=>(
                <>
                <Link to={`/author/${autor.id}`}>
                <li className="people-item">
                    <img src={autor.img}/>
                    <p className='people-p'>{autor.name}</p>
                    <strong className='people-strong'>{autor.strong}</strong>
                    <div className='people-div'>
                        <div className='people-div1'>
                            <img src={kitob}/>
                            <span className='people-span'>34</span>
                        </div>
                        <div className='people-div1'>
                            <img src={naush}/>
                            <span className='people-span'>13</span>
                        </div>
                    </div>
                </li>
                </Link>
              
                </>
                ))}
            </ul>
        </div>
    )
}