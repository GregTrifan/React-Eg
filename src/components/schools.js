import React, { useState } from "react";
import HsHandler from "./hshandler";

//to do
//implementeaza un buton de add more students care sa deschida un modal
//in modal sa fie un input in care sa scrii cati studenti sa adaugi
//la ok se adauga studentii

export const SchoolComponent = () => {

  const [hschools] = useState([
    { name: "HS 1", people: 942 },
    { name: "HS 2", people: 5322 },
    { name: "HS 3", people: 1023 },
  ]);
  return (
    <div className="cursive-text" style={{fontSize:16, textAlign: "center"}}>
      {hschools.map((hs) => (
        <HsHandler hs={hs} />
      ))}
    </div>
  );
};


