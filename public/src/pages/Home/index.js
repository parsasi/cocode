import React, {useState} from 'react';
export default function About() {
  const HandleBoxClick = (str)=>{
    alert(str);
  }

  return <div className="home">
    <div className="row">
      <div className="col">
        About
      </div>
    </div>
  </div>
}