import React,{useState,useEffect} from "react";
import "./style.scss"
import { useNavigate } from "react-router-dom";


const ProductCard = ({detail}) => {
  const navigate = useNavigate();
    useEffect(() => {
     console.log("de",detail);
    }, [detail])
    
    const handleClick =()=> {
      navigate(`/service/${detail._id}`)
    }
    
  return (
    <div className="card-product"  onClick={()=>handleClick()}>
      <div className="div-image">
        <img className="img-product" src={detail.picture} />
      </div>
      
      <div className="txt-product">
        <span className="pd-desc" ><span style={{fontSize:14}}>{detail.name}</span></span>
        <div className="pd-price">
          <span style={{color:"#FFD542"}} className="pa-4">เริ่มต้น</span>
          <span style={{fontSize:20,color:"#409BFF",fontWeight:600, marginLeft:8}}> ฿{detail.price.toLocaleString('th-TH')}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
