import logos from '../imgs/Badiiyat.svg'
import face from '../imgs/Bashara.png'
import vector from '../imgs/Vector 1.svg'
import './Style.css';
export default function Nav(){
    return (
        <div className="container">
            <div className='nav'>
                <a className='logo' href='/'>
                    <img src={logos}/>
                </a>
                <ul className='nav-list'>
                    <li>
                        <a className='nav-item' href='/'>Bosh sahifa</a>
                    </li>
                    <li>
                        <a className='nav-item' href='/'>Nasr</a>
                    </li>
                    <li>
                        <a className='nav-item' href='/'>Nazm</a>
                    </li>
                    <li>
                        <a className='nav-item' href='/'>Maqolalar</a>
                    </li>
                    <li>
                        <a className='nav-item' href='/'>Forum</a>
                    </li>
                </ul>
                <a className='a'>
                    <img src={face}/>
                    <img src={vector}/>
                </a>
            </div>
        </div>
    )
}