import React from 'react';
import { shallow, render, mount } from 'enzyme';

const Card = props => {
  const { id, name, email } = props;
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="Robo app" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;

//test are not being uploaded
