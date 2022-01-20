import React from "react";
import { Button } from "react-bootstrap";
import './Items.css';


const Items = ({item})=>{
    return(
        <>
            
      <div className="item-card">
            <div className="item-header"><u>{item.nombre}</u></div>
                <div className="item-img">
                <img className="img img-fluid" src={item.pictureUrl} alt="" width={"25%"}/>
            </div>
            <div className="item-description">{item.descripcion}</div>
            <div className="item-price"> {item.precio}</div>
    
      </div>
        </>
    );
}

export default Items;


