import React from "react";
import SingleImage from "./SingleImage";

const ImageBox = ({ banners }) => {
  return (
    <div className='company__image-box'>
      {banners.map((banner) => (
        <SingleImage key={banner._id} banner={banner.url} />
      ))}
    </div>
  );
};

export default ImageBox;
