import { useState } from "react";
import People from "./People"
export default function Catagory({setSelected}){
    
    const catagories = ["Hammasi", "Jadid adabiyoti", "Sovet davri","Mustaqillik", "Temuriylar davri"];
    
    console.log(catagories);
    
    return(
        <div className="container">
            <div className="catagory">
                <h2 className="cata-title">Asosiy kategoriyalar</h2>
                <div className="catagories">
                {catagories.map((c)=>(
                    <button className="catagories-span" onClick={()=>setSelected(c)}>{c}</button>
                ))}
            
            </div></div>
        </div>
    )
}