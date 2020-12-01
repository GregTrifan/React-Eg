import React, { useState } from "react";
import HsHandler from "./hshandler";

//to do
//implementeaza un buton de add more students care sa deschida un modal
//in modal sa fie un input in care sa scrii cati studenti sa adaugi
//la ok se adauga studentii

const SchoolComponent = () => {
  const [hschools, setHschools] = useState([
    { name: "HS 1", people: 942 },
    { name: "HS 2", people: 942 },
    { name: "HS 3", people: 942 },
  ]);
  return (
    <div className="is-family-secondary subtitle my-3">
      {hschools.map((hs) => (
        <HsHandler hs={hs} />
      ))}
    </div>
  );
};

export default SchoolComponent;
