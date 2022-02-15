import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className='section-top'>
      <div className='checkbox'>
        <input
          type='radio'
          id='radio-1'
          name='tabs'
          checked
          onChange={() => {}}
        />
        <label className='tab' htmlFor='radio-1'>
          Explore<span className='notification'></span>
        </label>
        <input type='radio' id='radio-2' name='tabs' onChange={() => {}} />
        <label className='tab' htmlFor='radio-2'>
          Activity
        </label>
        <span className='glider'></span>
      </div>
      <div className='search'>
        <span className='fa fa-search form-control-feedback'></span>
        <input
          type='text'
          className='form-control'
          placeholder='Search by name, group, type and others'
        />
      </div>
      <div className='avater-container'>
        <div className='single'>
          <img src='../../../../images/message.png' alt='' />
        </div>
        <div className='single'>
          <img src='../../../../images/notification.png' alt='' />
        </div>
        <div className='single test'>
          <img src='../../../../images/avatar.svg' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Header;
