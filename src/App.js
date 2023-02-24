import React, { useState } from "react";
import "./App.css";
import { Data } from "./data";

const App = () => {
  const [people, setPeople] = useState(Data);
  const [value, setValue] = useState(5);

  const handleValue = () => {
    return setValue(0);
  };

  const handleClick = () => {
    return (setPeople([]), handleValue());
  };
  return (
    <div className="container">
      <h2>{value} birthdays today</h2>
      {people.map((person) => {
        const { id, name, age, img } = person;
        return (
          <>
            <div key={id} className="item">
              <div>
                <img src={img} alt="hello" className="image" />
              </div>
              <div>
                <h3>{name}</h3>
                <h4>{age}years</h4>
              </div>
            </div>
          </>
        );
      })}
      <button className="btn" onClick={handleClick}>
        Clear birthday
      </button>
    </div>
  );
};
export default App;
