import React from "react";

const SingleImage = ({ banner }) => {
  return (
    <div className='single-image'>
      <img src={banner} alt='' />
    </div>
  );
};

export default SingleImage;
