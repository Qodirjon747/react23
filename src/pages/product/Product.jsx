import "./product.css";
import Header from "../../components/header/Header";
import data from "../../../public/data";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";


function Product() {
    const {id}=useParams();
   
    
  return (
    <div>
      <Header></Header>
      <div className="container">
        <h1>Mahsulot</h1>
        <button><Link to="/">Back</Link></button>
        <div className="ota">
          <img
            src={data[id].img[0]}
            alt=""
          />
          <div className="text">
            <h2>{data[id].name}</h2>
            <h2>{data[id].description}</h2>
            <p>Narxi: {data[id].price}</p>
            <p>color: {data[id].color}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
