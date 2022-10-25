import React from 'react';
import "./Main.css";
import TopSection from "../Main/TopSection/TopSection";
import MainSection from "../Main/MainSection/MainSection";
import Secondary from "../Main/Secondary/Secondary";

function Main() {

  return (
    <div className='main'>
      <TopSection />
      <MainSection />
      <Secondary />
    </div>
  )
}

export default Main