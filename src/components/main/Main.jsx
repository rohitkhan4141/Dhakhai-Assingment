import React from "react";
import ButtonGroup from "./button-group/ButtonGroup";
import Companies from "./companies/Companies";
import "./main.css";
import Header from "./section-top/Header";

const Main = () => {
  return (
    <section className='main'>
      <Header />
      <ButtonGroup />
      <Companies />
    </section>
  );
};

export default Main;
