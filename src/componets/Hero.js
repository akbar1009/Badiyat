import search from '../imgs/search btn.svg'
import hero from '../imgs/heroo.png'
export default function Hero(){
    return(
        <div className="container">
            <div className="hero">
                <img src={hero}/>
                <div className='search'>
                    <h4 className='hero-h4'>Qidirish</h4>
                    <div className='input-div'>
                        <input className='search-input' placeholder='Adiblar, kitoblar, audiolar, maqolalar...'/>
                        <button className='hero-btn'>
                            <img src={search}/>
                            <span className='btn-span'>Izlash</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}