import React from "react";
import Welcome from "../../Component/Welcome/Welcome";

const people = [
  {
    name: "A",
    age: 21,
    color: "green"
  },
  {
    name: "B",
    age: 26,
    color: "red"
  },
  {
    name: "Hin",
    age: 19,
    color: "blue"
  }
];
const WelcomePage = () => {
  return (
    <div>
      {people.map(person =>{
        return (
          <Welcome
            name = {person.name}
            age = {person.age}
            color = {person.color}
          />
        )
      })}
    </div>
  );
};
export default WelcomePage;