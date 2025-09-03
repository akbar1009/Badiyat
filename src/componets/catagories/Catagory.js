import People from "./People"
export default function Catagory(){
    return(
        <div className="container">
            <div className="catagory">
                <h2 className="cata-title">Asosiy kategoriyalar</h2>
                <div className="catagories">
                    <span className="catagories-span">Temuriylar davri</span>
                    <span className="catagories-span">Jadid adabiyoti</span>
                    <span className="catagories-span">Sovet davri</span>
                    <span className="catagories-span">Mustaqillik davri</span>
                </div>
                <People/>
            </div>
        </div>
    )
}