import React from "react";
import ImageBox from "./image-box/ImageBox";
import "./singlecompany.css";

const SingleCompany = ({
  addresses,
  companyName,
  banners,
  logo,
  orderQuantity,
}) => {
  let city;
  let country;
  if (addresses.length != 0) {
    city = addresses[0].city;
    country = addresses[0].country;
  } else {
    city = "Rangpur";
    country = "Bnagladesh";
  }

  console.log(city, country);
  return (
    <div className='company grid'>
      <ImageBox banners={banners} />
      <div className='company__logo'>
        <img src={logo.url} alt='logo' />
      </div>
      <div className='company__content-box'>
        <h2>{companyName}</h2>
        <div className='location'>
          <p>{`${city}, ${country}`}</p>
          <p className='Quantity'>{`*Min Qty: ${orderQuantity}`}</p>
        </div>
        <p>Hoodies, Trousers, Jackets, Hoodies ..</p>
      </div>
      <button className='button-classic'>View Details</button>
    </div>
  );
};

export default SingleCompany;
