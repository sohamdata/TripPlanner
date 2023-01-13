import React from 'react';

import CountryItem from '../CountryItem/CountryItem';
import './CountriesList.css';

const CountriesList = (props) => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <CountryItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CountryItem>
      ))}
    </ul>
  );
};

export default CountriesList;
