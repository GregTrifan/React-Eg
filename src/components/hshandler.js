import React, { useState } from "react";
import { Button } from 'antd';

const HsHandler = (props) => {
  const [people, setPeople] = useState(props.hs.people);
  const addStudent = () => {
    setPeople(people + 1);
  };
  const removeStudent = () => {
    setPeople(people - 1);
  };

  return (
    <div>
      <p>
        {props.hs.name} - <strong>{people} de elevi</strong>
      </p>
      <Button type="primary" shape="round" onClick={addStudent}>
        Adauga Elevi
      </Button>

      <Button  type="warning" shape="round" onClick={removeStudent}>
        Scoate Elevi
      </Button>
        <br/><br/>
    </div>
  );
};

export default HsHandler;
