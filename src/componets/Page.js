import pageImg from '../imgs/pageImg.png'
import kitob from '../imgs/kitobbb.svg'
import naush from '../imgs/headphone.svg'
import tel from '../imgs/tel.svg'
import book1 from '../imgs/book1.png'
import book2 from '../imgs/book2.png'
import book3 from '../imgs/book3.png'
import book4 from '../imgs/mock.png'
import book5 from '../imgs/prince.png'
import book6 from '../imgs/fact.png'
import { Link, useParams } from 'react-router-dom'
export default function Page(){
    const {id} = useParams()
    const books = [
        {id:1,img:book1,name:"Dunyoning ishlari",},
        {id:2,img:book2,name:"Ikki eshik orasi",},
        {id:3,img:book3,name:"Tushda kechgan umrlar",},
        {id:4,img:book4,name:"To Kill a Mockingbird",},
        {id:5,img:book5,name:"The Little Prince",},
        {id:6,img:book6,name:"Candide",},
    ]

    const book = books.find((b)=>b.id === parseInt(id))

    return(
        <div className="container">
            <div className="page">
                <div className="page-up">
                    <div className="page-left">
                        <img src={pageImg}/>
                    </div>
                    <div className='page-right'>
                        <h2 className='page-title'>Qo'rqma</h2>
                        <span className='page-span'>Javlon Jovliyev</span>
                        <ul className='page-ul1'>
                            <li className='page-li1'>Sahifalar soni: 376</li>
                            <li className='page-li1'>Chop etilgan: 2021</li>
                            <li className='page-li1'>Janri: Tarixiy</li>
                            <li className='page-li1'>Nashriyot: Nihol nashr</li>
                        </ul>
                        <span className='page-span'>To'liq ma'lumot</span>
                        <p className='page-text'>Роман ўтган асрнинг йигирманчи йилларида Германияда
                        таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат
                        йигит-қизларининг  хотирасига бағишланади. <br/>
                        Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар 
                        тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни 
                        ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун 
                        ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва 
                        қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади 
                        ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги 
                        ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.</p>
                        <span className='page-span'>Mavjud formatlar</span>
                        <div className='page-ul2-div'>
                            <ul className='page-ul2'>
                                <li className='page-li2'>
                                    <img width={24} height={24} src={kitob}/>
                                    <strong className='page-strong'>Qog’oz kitob</strong>
                                    <p className='page-ul-text'>27 000 so’m</p>
                                </li>
                                <li className='page-li2'>
                                    <img width={24} height={24} src={naush}/>
                                    <strong className='page-strong'>Audiokitob</strong>
                                    <p className='page-ul-text'>6:23 soat</p>
                                </li>
                                <li className='page-li2'>
                                    <img width={24} height={24} src={tel}/>
                                    <strong className='page-strong'>Elektron</strong>
                                    <p className='page-ul-text'>pdf, epub</p>
                                </li>
                            </ul>
                            <button className='page-btn'>Javonga qo’shish</button>
                        </div>
                    </div>
                </div>
                <div className='page-middle'>
                    <div className='middle-spans'>
                        <span className='middle-span'>Muallif haqida</span>
                        <span className='middle-span'>Kitobdan iqtiboslar</span>
                        <span className='middle-span'>Kitobxonlar taqrizi</span>
                    </div>
                    <div className='middle-divs'>
                        <div className='middle-div'>
                            <p className='middle-div-text'>Inson bolasi ne kunlarni ko‘rmaydi?! <br/>Har bir odam o‘z g‘ami bilan bo‘lsa, hayotdan ko‘z yumib ketganlarga umr <br/> bo‘yi motam tutib o‘tsa, bu moddiy olam shu kunlarga yetolarmidi? <br/> Hayot to‘lqini ojizlarni qirg‘oqqa irg‘itib tashlaydi. Oqimga qarshi suza <br/> olganlar, to‘lqinni egarlaganlargina ertangi kunga yetib keladi.</p>
                        </div>
                        <div className='middle-div'>
                            <p className='middle-div-text'>Yer kurrasida chumolidek mehnat qilayotganlardan ko‘ra, tuproq tagida <br/> yotganlar ko‘p. Yer qatlami odam suyaklariga to‘lib ketgan.</p>
                        </div>
                    </div>
                </div>
                <div className='page-down'>
                    <div className='page-titles'>
                        <h4 className='page-down1-title1'>Sizga yoqishi mumkin</h4>
                        <h4 className='page-down1-title2'>Barchasini ko'rish</h4>
                    </div>
                    <ul className='page-down-list'>
                        {books.map((book) =>(
                        <>
                        <Link to={`/page/${book.id}`}>
                        <li className='page-down-item'>
                            <img src={book.img}/>
                            <p className="asar-text">{book.name}</p>
                        </li>
                        </Link>
                        </>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}