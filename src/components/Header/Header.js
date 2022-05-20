import React from "react";
import "./style.scss"
import { useNavigate } from "react-router-dom";


const Header = () => {
  
  const navigate = useNavigate();
 
  const goToBookingList =()=> {
    navigate(`/orderslist`)
  }
  
  const goToMain =()=> {
    navigate(`/main`)
  }
  return (
      <div className="menu-header">
          <button className="btn " onClick={()=> goToMain()}>บริการ</button>
          <button className="btn" onClick={()=> goToBookingList()}>รายการ</button>
      </div>
  );
};

export default Header;
