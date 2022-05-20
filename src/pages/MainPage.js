import React, { useState, useEffect } from "react";
import ProductCard from "../components/Card/ProductCard";
import { service } from "../api/services";
import "./style.scss";
import Loading from "../components/Card/Loading";
import Header from "../components/Header/Header";

const MainPage = () => {
  const [serviceList, setServiceList] = useState([]);
  const [isloading, setIsloading] = useState(false)

  useEffect(() => {
    callApi();
    
    console.log("api");
    
  }, []);
  const callApi = () => {
    setIsloading(true)
    
    service.getApi("v1/services"
    ).then((res) => {
      setServiceList(res.data)
        setIsloading(false)
    }
    );
    
    
    
  };

  return (
    <div>
      <Loading active={isloading}>
        <Header/>
      <div style={{ height: 570 }} className="cover-container">
        <div className="header">
          <span className="h1">คำบรรยายต่างๆนานา</span>
        </div>
        <div className="h2">
          <span>เรามีบริการที่ครบครันครอบคลุม พร้อมที่จะช่วยเหลือคุณใน</span>
          <span>ทุกๆด้านอย่างที่คุณต้องการ</span>
        </div>
      </div>
      <div className="job-txt">
        <span>งานบริการ</span>
      </div>

      <div className="product-area">
        <div className="product-container">
          {serviceList.map((item,index) => {
            return <ProductCard detail={item} key={index} />;
          })}
        </div>
      </div>
      </Loading>
    </div>
  );
};

export default MainPage;
