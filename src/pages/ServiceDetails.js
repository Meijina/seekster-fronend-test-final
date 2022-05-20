import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { service } from "../api/services";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Card/Loading";
import Header from "../components/Header/Header";
const ServicesDetails = () => {
  const [serviceDetail, setServiceDetail] = useState({});
  const navigate = useNavigate();
  const useparam = useParams();
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    let { id } = useparam;
    callApi(id);
    console.log("id", id);
  }, []);

  const callApi = (id) => {
    setIsloading(true)
    service.getApi(`v1/services/${id}`).then((res) => {
      setServiceDetail(res.data);
      setIsloading(false);
    });
  };
  const booking = () => {
    service.postApi(`/v1/services/${serviceDetail._id}/booking`).then((res) => {
      console.log("res", res);
      navigate(`/orderslist`);
    });
  };

  return (
    <Loading active={isloading}>
      <Header/>
      <div className="pa-page">
        <div style={{ display: "grid" }}>
          <span className="text-ser">{serviceDetail.name}</span>
          <span className="text-ser">฿ {serviceDetail.price}</span>
        </div>

        <text className="text-dis">{serviceDetail.description}</text>
        <div style={{ marginTop: 20 }}>
          <button className="btn-1 " onClick={() => booking()}>
            จองบริการ
          </button>
        </div>
      </div>
    </Loading>
  );
};

export default ServicesDetails;
