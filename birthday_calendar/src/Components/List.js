import React from "react";
import "./List.css";
import User from "../Images/user.jpeg";

const List = ({ birthdays }) => {
  return (
    <>
      <div className="list">
        {birthdays.map((birthday) => {
          const { id, name, age } = birthday;
          return (
            <article key={id} className="birthday">
              <img src={User} alt={name} />
              <div className="box">
                <h4>{name}</h4>
                <p>{age} years old</p>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default List;
