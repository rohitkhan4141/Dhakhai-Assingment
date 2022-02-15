import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./sideBar.css";

const SideBar = () => {
  const { removeToken } = useAuth();
  const history = useHistory();
  const logout = () => {
    removeToken();
    history.push("/");
  };
  return (
    <div className='sidebar'>
      <div className='sidebar__content'>
        <div className='sidebar__content-top'>
          <div className='logo'>
            <img src='../../../images/logo.png' alt='' />
          </div>
          <div className='icons'>
            <div className='image'>
              <img src='../../../images/home.png' alt='home' />
            </div>
            <div className='image'>
              <img src='../../../images/Search.png' alt='Search' />
            </div>
            <div className='image'>
              <img src='../../../images/file.png' alt='file' />
            </div>
            <div className='image'>
              <img src='../../../images/shirt.png' alt='shirt' />
            </div>
            <div className='image'>
              <img src='../../../images/ole.png' alt='ole' />
            </div>
            <div className='image'>
              <img src='../../../images/cart.png' alt='cart' />
            </div>
            <div className='image'>
              <img src='../../../images/spiner.png' alt='spinner' />
            </div>
          </div>
        </div>
        <div className='sidebar__content-bottom'>
          <div className='image'>
            <img src='../../../images/Setting.png' alt='home' />
          </div>
          <div className='image'>
            <img src='../../../images/why.png' alt='home' />
          </div>
          <div className='image'>
            <img src='../../../images/Logout.png' alt='home' onClick={logout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
