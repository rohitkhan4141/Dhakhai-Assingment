import React from "react";
import Main from "./main/Main";
import SideBar from "./sidebar/SideBar";

const Home = () => {
  return (
    <div className='container'>
      <SideBar />
      <Main />
    </div>
  );
};

export default Home;
