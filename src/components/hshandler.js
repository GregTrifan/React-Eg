import React, { useState } from "react";

const HsHandler = (props) => {
  const [people, setPeople] = useState(props.hs.people);

  const addStudent = () => {
    setPeople(people + 1);
  };
  const removeStudent = () => {
    setPeople(people - 1);
  };

  return (
    <div className="has-text-centered">
      <p className="my-4">
        {props.hs.name} - <strong>{people} de elevi</strong>
      </p>
      <button className="button is-success is-rounded" onClick={addStudent}>
        Adauga elevi
      </button>
      <button className="button is-danger is-rounded" onClick={removeStudent}>
        Scoate Elevi
      </button>
    </div>
  );
};

export default HsHandler;
