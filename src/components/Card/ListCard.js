import React, { useState, useEffect } from "react";
import { BiTimeFive } from "react-icons/bi";
import { IoCalendar } from "react-icons/io5";
import moment from 'moment'
import "./style.scss";
const ListCard = ({ detail }) => {
  useEffect(() => {
    console.log("de", detail);
  }, [detail]);

  return (
    <div className="card-product2">
      <div className="txt-product">
        <div className="txt-card1">
          <div>
            <span className="list-txt pa-4">
              {/* ทำความสะอาดทั่วไป (แม่บ้าน) */}
              {detail.service.name}
            </span>
          </div>

          <div>
            <span
              className="pa-4 price-txt"
            >
              ราคา
            </span>
            <span className="price-txt2" >
              ฿ {detail.service.price}
            </span>
          </div>
        </div>
      </div>
      <div className="icon-card">
          <div className="icon-txt" ><IoCalendar size={22} color="#007AFF"/>&nbsp; {moment(detail.createdAt).format('DD MMMM YYYY')}</div>
          <div className="icon-txt"><BiTimeFive size={22} color="#007AFF" />&nbsp; {moment(detail.createdAt).format('hh:mm')}</div>
          
          
        </div>
    </div>
  );
};

export default ListCard;
