import { Link } from 'react-router-dom';
import logos from '../imgs/Badiiyat.svg'
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
                <div className='a'>
                    <Link className='signup' to={"/signup"}>Sign up</Link>
                    <Link className='signin' to={"/signin"}>Sign in</Link>
                </div>
            </div>
        </div>
    )
}