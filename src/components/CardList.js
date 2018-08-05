import React from "react";
import Card from "./Card";

export default props => {
  const cardList = props.robots.map(robot => (
    <Card id={robot.id} name={robot.name} email={robot.email} key={robot.id} />
  ));
  return cardList;
};
