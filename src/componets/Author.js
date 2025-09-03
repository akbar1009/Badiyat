import img1 from "../imgs/o'tkir.png"
import ijod from '../imgs/ijod.svg'
import book1 from '../imgs/book1.png'
import book2 from '../imgs/book2.png'
import book3 from '../imgs/book3.png'
import { useParams } from "react-router-dom"
export default function Author(){
    const {id} = useParams();

    const people = [
        
        {id:1,img:img1,dateBorth:"12-Iyul 1879",dateDeath:"25-Avg 1934",name:"Abdulla Avloniy",
        title:`Avloniy 1878-yil 12-iyulida Toshkentda Mergancha mahallasida toʻquvchilar oilasida tugʻilgan.
        Oilasidagi moddiy yetishmovchiliklar sababli bolaligidan suvoqchilik, gʻisht quyish, pechkachilik,
        binokorlik, duradgorlik kabi kasblar bilan shugʻullangan. Bularning ortidan „Imoratchi usta“ 
        degan nom oladi. U tarjimai holida bu haqida shunday yozgan: "12 yoshimdan Oʻqchi mahallasidagi
        madrasada dars oʻqiy boshladim. 13 yoshimdan boshlab yoz kunlari mardikor boʻlib ishlab, oilamga
        yordam qilib, qish kunlari oʻqir edim. 14 yoshimdan boshlab, oʻsha zamonga muvofiq har xil sheʼrlar
        yoza boshladim. Bu zamonlarda „Tarjumon“ gazetasini oʻqib, zamondan xabardor boʻldim". Oʻqchidagi
        eski maktabda, soʻng madrasada oʻqigan (1885—1895). Madrasani bitirib, maktabdorlik bilan shugʻullandi.
        Orenburg, Qozon, Tiflisda chiqib turgan gazeta-jurnallarni kuzatib borgan`,book1:book1,book2:book2,book3:book3,bookText1:"Dunyoning ishlari",bookText2:"Ikki eshik orasi",bookText3:"Tushda kechgan umrlar"},
        {id:2,img:img1,dateBorth:"3-Iyul 1941",dateDeath:"25-Avg 1934",name:"Nusrat Rahmat",
        title:`1941-yilning 3-iyul kuni Samarqand tumanida joylashgan Qo‘shmachit qishlog‘ida tavallud topgan.
        „Lenin yo‘li“ gazetasida ishlagan, „Qishloq haqiqati“ gazetasining Samarqand, Buxoro viloyatlari boʻyicha
        muxbiri boʻlgan. Keyin Toshkentga koʻchib „Oʻzbekiston adabiyoti va sanʼati“ gazetasi[2],"Mehnat" nashriyoti,
        Oʻzbekiston tabiatni muhofaza qilish qoʻmitasida xizmat qilgan.`,book1:book1,book2:book2,book3:book3,
        bookText1:"Dunyoning ishlari",bookText2:"Ikki eshik orasi",bookText3:"Tushda kechgan umrlar"},
        {id:3,img:img1,dateBorth:"12-Iyul 1879",dateDeath:"25-Avg 1934",name:"Nusrat Rahmat",
        title:`1941-yilning 3-iyul kuni Samarqand tumanida joylashgan Qo‘shmachit qishlog‘ida tavallud topgan.
        „Lenin yo‘li“ gazetasida ishlagan, „Qishloq haqiqati“ gazetasining Samarqand, Buxoro viloyatlari boʻyicha
        muxbiri boʻlgan. Keyin Toshkentga koʻchib „Oʻzbekiston adabiyoti va sanʼati“ gazetasi[2],"Mehnat" nashriyoti,
        Oʻzbekiston tabiatni muhofaza qilish qoʻmitasida xizmat qilgan.`,book1:book1,book2:book2,book3:book3,
        bookText1:"Dunyoning ishlari",bookText2:"Ikki eshik orasi",bookText3:"Tushda kechgan umrlar"},
        {id:3,img:img1,dateBorth:"5-Avg 1941",dateDeath:"24-MAY 2013",name:"O’tkir Hoshimov",
        title: `Oʻtkir Hoshimov 1941 yil Toshkent viloyatining Zangiota (hozirgi Chilonzor) tumanidagi
        Doʻmbiravot mavzeida tugʻildi. Oʻ. Hoshimov mehnat faoliyatini erta boshladi. Toshkent Davlat 
        universiteti (hozirgi Oʻzbekiston Milliy universiteti)ning jurnalistika kulliyotida oʻqish bilan 
        baravar gazeta tahririyatida ishladi. 1959 yildan 1963 yilgacha “Temiryoʻlchi”, “Qizil Oʻzbekiston”, 
        “Transportniy rabochiy” gazetalarida xat tashuvchi, mussaxhih, tarjimon boʻlib ishladi. Soʻng “Toshkent 
        haqiqati” gazetasida adabiy xodim (1963–1966), “Toshkent oqshomi” gazetasida boʻlim mudiri (1966–1982), 
        Gʻ. Gʻulom nomidagi Adabiyot va sanʼat nashriyotida bosh muharrir oʻrinbosari (1982–1985) boʻldi. 1985–1995 
        yillarda “Sharq yulduzi” jurnaliga bosh muharrirlik qildi. 1995 yildan 2005 yilgacha Oʻzbekiston Respublikasi 
        Oliy Majlisining Matbuot va axborot qoʻmitasi raisi lavozimida ishladi. 2005 yildan “Teatr“ jurnalida bosh 
        muharrir boʻlib ishladi.`,book1:book1,book2:book2,book3:book3,bookText1:"Dunyoning ishlari",
        bookText2:"Ikki eshik orasi",bookText3:"Tushda kechgan umrlar"},
        {id:4,img:img1,dateBorth:"6-Mart 1889",dateDeath:"18-Mart 1929",name:"Hamza Hakimzoda Niyoziy",
        title: `Hamza Hakimzoda Niyoziy (6-mart, 1889-yil, Qoʻqon, Qoʻqon uyezdi, Fargʻona viloyati,
        Turkiston general-gubernatorligi, Rossiya imperiyasi – 18-mart, 1929-yil, Shohimardon, Fargʻona
        viloyati, Oʻzbekiston SSR, SSSR) — oʻzbek sovet adabiyotining taniqli namoyandasi, shoir, yozuvchi,
        pedagog, teatr va jamoat arbobi. Oʻzbekiston SSR xalq yozuvchisi (1926-yil). Birinchi oʻzbek
        dramaturgi va zamonaviy oʻzbek musiqa shakllarining asoschisi. U Gʻafur Gʻulom, Abdurauf Fitrat,
        Abdulhamid Choʻlpon, Abdulla Qodiriy va Mahmudxoʻja Behbudiylar bilan bir qatorda zamonaviy oʻzbek
        adabiyoti ilk rivojining yetakchi namoyandalaridan biri sifatida koʻriladi. Hamza óz ijodini 
        1905–1906-yillarda boshlagan.`,book1:book1,book2:book2,book3:book3,bookText1:"Dunyoning ishlari",
        bookText2:"Ikki eshik orasi",bookText3:"Tushda kechgan umrlar"},
        {id:5,img:img1,dateBorth:"6-Mart 1889",dateDeath:"18-Mart 1929",name:"Hamza Hakimzoda Niyoziy",
        title: `Hamza Hakimzoda Niyoziy (6-mart, 1889-yil, Qoʻqon, Qoʻqon uyezdi, Fargʻona viloyati,
        Turkiston general-gubernatorligi, Rossiya imperiyasi – 18-mart, 1929-yil, Shohimardon, Fargʻona
        viloyati, Oʻzbekiston SSR, SSSR) — oʻzbek sovet adabiyotining taniqli namoyandasi, shoir, yozuvchi,
        pedagog, teatr va jamoat arbobi. Oʻzbekiston SSR xalq yozuvchisi (1926-yil). Birinchi oʻzbek
        dramaturgi va zamonaviy oʻzbek musiqa shakllarining asoschisi. U Gʻafur Gʻulom, Abdurauf Fitrat,
        Abdulhamid Choʻlpon, Abdulla Qodiriy va Mahmudxoʻja Behbudiylar bilan bir qatorda zamonaviy oʻzbek
        adabiyoti ilk rivojining yetakchi namoyandalaridan biri sifatida koʻriladi. Hamza óz ijodini 
        1905–1906-yillarda boshlagan.`,book1:book1,book2:book2,book3:book3,bookText1:"Dunyoning ishlari",
        bookText2:"Ikki eshik orasi",bookText3:"Tushda kechgan umrlar"},
        {id:6,img:img1,dateBorth:"6-Mart 1889",dateDeath:"18-Mart 1929",name:"Hamza Hakimzoda Niyoziy",
        title: `Hamza Hakimzoda Niyoziy (6-mart, 1889-yil, Qoʻqon, Qoʻqon uyezdi, Fargʻona viloyati,
        Turkiston general-gubernatorligi, Rossiya imperiyasi – 18-mart, 1929-yil, Shohimardon, Fargʻona
        viloyati, Oʻzbekiston SSR, SSSR) — oʻzbek sovet adabiyotining taniqli namoyandasi, shoir, yozuvchi,
        pedagog, teatr va jamoat arbobi. Oʻzbekiston SSR xalq yozuvchisi (1926-yil). Birinchi oʻzbek
        dramaturgi va zamonaviy oʻzbek musiqa shakllarining asoschisi. U Gʻafur Gʻulom, Abdurauf Fitrat,
        Abdulhamid Choʻlpon, Abdulla Qodiriy va Mahmudxoʻja Behbudiylar bilan bir qatorda zamonaviy oʻzbek
        adabiyoti ilk rivojining yetakchi namoyandalaridan biri sifatida koʻriladi. Hamza óz ijodini 
        1905–1906-yillarda boshlagan.`,book1:book1,book2:book2,book3:book3,bookText1:"Dunyoning ishlari",
        bookText2:"Ikki eshik orasi",bookText3:"Tushda kechgan umrlar"},
        {id:7,img:img1,dateBorth:"6-Mart 1889",dateDeath:"18-Mart 1929",name:"Hamza Hakimzoda Niyoziy",
        title: `Hamza Hakimzoda Niyoziy (6-mart, 1889-yil, Qoʻqon, Qoʻqon uyezdi, Fargʻona viloyati,
        Turkiston general-gubernatorligi, Rossiya imperiyasi – 18-mart, 1929-yil, Shohimardon, Fargʻona
        viloyati, Oʻzbekiston SSR, SSSR) — oʻzbek sovet adabiyotining taniqli namoyandasi, shoir, yozuvchi,
        pedagog, teatr va jamoat arbobi. Oʻzbekiston SSR xalq yozuvchisi (1926-yil). Birinchi oʻzbek
        dramaturgi va zamonaviy oʻzbek musiqa shakllarining asoschisi. U Gʻafur Gʻulom, Abdurauf Fitrat,
        Abdulhamid Choʻlpon, Abdulla Qodiriy va Mahmudxoʻja Behbudiylar bilan bir qatorda zamonaviy oʻzbek
        adabiyoti ilk rivojining yetakchi namoyandalaridan biri sifatida koʻriladi. Hamza óz ijodini 
        1905–1906-yillarda boshlagan.`,book1:book1,book2:book2,book3:book3,bookText1:"Dunyoning ishlari",
        bookText2:"Ikki eshik orasi",bookText3:"Tushda kechgan umrlar"},
        {id:8,img:img1,dateBorth:"6-Mart 1889",dateDeath:"18-Mart 1929",name:"Hamza Hakimzoda Niyoziy",
        title: `Hamza Hakimzoda Niyoziy (6-mart, 1889-yil, Qoʻqon, Qoʻqon uyezdi, Fargʻona viloyati,
        Turkiston general-gubernatorligi, Rossiya imperiyasi – 18-mart, 1929-yil, Shohimardon, Fargʻona
        viloyati, Oʻzbekiston SSR, SSSR) — oʻzbek sovet adabiyotining taniqli namoyandasi, shoir, yozuvchi,
        pedagog, teatr va jamoat arbobi. Oʻzbekiston SSR xalq yozuvchisi (1926-yil). Birinchi oʻzbek
        dramaturgi va zamonaviy oʻzbek musiqa shakllarining asoschisi. U Gʻafur Gʻulom, Abdurauf Fitrat,
        Abdulhamid Choʻlpon, Abdulla Qodiriy va Mahmudxoʻja Behbudiylar bilan bir qatorda zamonaviy oʻzbek
        adabiyoti ilk rivojining yetakchi namoyandalaridan biri sifatida koʻriladi. Hamza óz ijodini 
        1905–1906-yillarda boshlagan.`,book1:book1,book2:book2,book3:book3,bookText1:"Dunyoning ishlari",
        bookText2:"Ikki eshik orasi",bookText3:"Tushda kechgan umrlar"},
        {id:9,img:img1,dateBorth:"6-Mart 1889",dateDeath:"18-Mart 1929",name:"Hamza Hakimzoda Niyoziy",
        title: `Hamza Hakimzoda Niyoziy (6-mart, 1889-yil, Qoʻqon, Qoʻqon uyezdi, Fargʻona viloyati,
        Turkiston general-gubernatorligi, Rossiya imperiyasi – 18-mart, 1929-yil, Shohimardon, Fargʻona
        viloyati, Oʻzbekiston SSR, SSSR) — oʻzbek sovet adabiyotining taniqli namoyandasi, shoir, yozuvchi,
        pedagog, teatr va jamoat arbobi. Oʻzbekiston SSR xalq yozuvchisi (1926-yil). Birinchi oʻzbek
        dramaturgi va zamonaviy oʻzbek musiqa shakllarining asoschisi. U Gʻafur Gʻulom, Abdurauf Fitrat,
        Abdulhamid Choʻlpon, Abdulla Qodiriy va Mahmudxoʻja Behbudiylar bilan bir qatorda zamonaviy oʻzbek
        adabiyoti ilk rivojining yetakchi namoyandalaridan biri sifatida koʻriladi. Hamza óz ijodini 
        1905–1906-yillarda boshlagan.`,book1:book1,book2:book2,book3:book3,bookText1:"Dunyoning ishlari",
        bookText2:"Ikki eshik orasi",bookText3:"Tushda kechgan umrlar"},
        {id:10,img:img1,dateBorth:"6-Mart 1889",dateDeath:"18-Mart 1929",name:"Hamza Hakimzoda Niyoziy",
        title: `Hamza Hakimzoda Niyoziy (6-mart, 1889-yil, Qoʻqon, Qoʻqon uyezdi, Fargʻona viloyati,
        Turkiston general-gubernatorligi, Rossiya imperiyasi – 18-mart, 1929-yil, Shohimardon, Fargʻona
        viloyati, Oʻzbekiston SSR, SSSR) — oʻzbek sovet adabiyotining taniqli namoyandasi, shoir, yozuvchi,
        pedagog, teatr va jamoat arbobi. Oʻzbekiston SSR xalq yozuvchisi (1926-yil). Birinchi oʻzbek
        dramaturgi va zamonaviy oʻzbek musiqa shakllarining asoschisi. U Gʻafur Gʻulom, Abdurauf Fitrat,
        Abdulhamid Choʻlpon, Abdulla Qodiriy va Mahmudxoʻja Behbudiylar bilan bir qatorda zamonaviy oʻzbek
        adabiyoti ilk rivojining yetakchi namoyandalaridan biri sifatida koʻriladi. Hamza óz ijodini 
        1905–1906-yillarda boshlagan.`,book1:book1,book2:book2,book3:book3,bookText1:"Dunyoning ishlari",
        bookText2:"Ikki eshik orasi",bookText3:"Tushda kechgan umrlar"},
        {id:11,img:img1,dateBorth:"6-Mart 1889",dateDeath:"18-Mart 1929",name:"Hamza Hakimzoda Niyoziy",
        title: `Hamza Hakimzoda Niyoziy (6-mart, 1889-yil, Qoʻqon, Qoʻqon uyezdi, Fargʻona viloyati,
        Turkiston general-gubernatorligi, Rossiya imperiyasi – 18-mart, 1929-yil, Shohimardon, Fargʻona
        viloyati, Oʻzbekiston SSR, SSSR) — oʻzbek sovet adabiyotining taniqli namoyandasi, shoir, yozuvchi,
        pedagog, teatr va jamoat arbobi. Oʻzbekiston SSR xalq yozuvchisi (1926-yil). Birinchi oʻzbek
        dramaturgi va zamonaviy oʻzbek musiqa shakllarining asoschisi. U Gʻafur Gʻulom, Abdurauf Fitrat,
        Abdulhamid Choʻlpon, Abdulla Qodiriy va Mahmudxoʻja Behbudiylar bilan bir qatorda zamonaviy oʻzbek
        adabiyoti ilk rivojining yetakchi namoyandalaridan biri sifatida koʻriladi. Hamza óz ijodini 
        1905–1906-yillarda boshlagan.`,book1:book1,book2:book2,book3:book3,bookText1:"Dunyoning ishlari",
        bookText2:"Ikki eshik orasi",bookText3:"Tushda kechgan umrlar"},
    ]
 
    
    const person = people.find((p)=>p.id === parseInt(id))
    
    if(!person){
      return <h1>Muallif topilmadi!</h1>
    } else {

 return(
        <div className="container">
            <div className="author">
                <div className="author-left">
                    <img src={person.img}/>
                    <div className="date">
                        <div className="date1">
                            <span className="date-span">Tavvalud sanasi</span>
                            <p className="date-text">{person.dateBorth}</p>
                            <strong className="date-strong">Toshkent, Uzbekistan</strong>
                        </div>
                        <div className="date2">
                            <span className="date-span">Vafot etgan sanasi</span>
                            <p className="date-text">{person.dateDeath}</p>
                            <strong className="date-strong">Toshkent, Uzbekistan</strong>
                        </div>
                    </div>
                </div>
                <div className="author-right">
                    <h2 className="author-h2">{person.name}</h2>
                    <p className="author-text">{person.title}</p>
                    <div className="ijod">
                        <div className="ijod2">
                            <img src={ijod}/>
                            <span className="ijod-span">Ijodi</span>
                        </div>
                        <p className="ijod-text">
                            Yozuvchining ilk asari 1962-yilda "Po'lat chavandoz" nomida <br/>
                            ocherklar to'plami tarzida nashrdan chiqdi. Ammo yozuvchiga <br/>
                            muvaffaqiyat keltirgan asar 1970-yilda nashr qilingan „Bahor <br/>
                            qaytmaydi“ qissasi bo'ldi.
                        </p>
                    </div>
                    <div className="author-right-asarlar">
                        <h4 className="asar-h4">Asarlari</h4>
                        <ul className="asar-ul">
                            <li className="asar-li">
                                <img src={person.book1}/>
                                <p className="asar-text">{person.bookText1}</p>
                            </li>
                            <li className="asar-li">
                                <img src={person.book2}/>
                                <p className="asar-text">{person.bookText2}</p>
                            </li>
                            <li className="asar-li">
                                <img width={165} height={246} src={person.book3}/>
                                <p className="asar-text">{person.bookText3}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
   }}
   
