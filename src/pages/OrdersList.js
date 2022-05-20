import React, { useState, useEffect } from "react";
import ListCard from "../components/Card/ListCard";
import { service } from "../api/services";
import Loading from "../components/Card/Loading";
import Header from "../components/Header/Header";
const OrdersList = () => {
  const [isloading, setIsloading] = useState(false);
  useEffect(() => {
    callApi();
  }, []);

  const [orderList, setOrderList] = useState([]);
  const callApi = () => {
    setIsloading(true)
    service.getApi("/v1/orders").then((res) => {
      setOrderList(res.data);
      setIsloading(false);
    });
  };
  return (
    <Loading active={isloading}>
      <Header/>
      <div className="pa-page">
        <div style={{ display: "grid" }}>
          <span className="text-ser">รายการ</span>
          <div>
            <div style={{ paddingRight: 64 }}>
              {orderList.map((item) => {
                return <ListCard detail={item} />;
              })}
              {/* <ListCard/> */}
            </div>
          </div>
        </div>
      </div>
    </Loading>
  );
};

export default OrdersList;
