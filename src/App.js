import "./main.scss";
import { Navbar } from "./components/navbar";
import React from "react";

//gaseste o modalitate de a adauga sau scadea mai multi studenti.
//uita-te la modal in antd, foloseste si un input pt numere

function App() {
  return (
    <div>
      <Navbar />
      <h1 className="title has-text-centered">Index Page</h1>
    </div>
  );
}

export default App;
