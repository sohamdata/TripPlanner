import React, { useState } from 'react';

import CountriesList from './components/Countries/CountriesList/CountriesList'
import CountryInput from './components/Countries/CountryInput/CountryInput';
import './App.css';

const App = () => {
  const DEFAULT = [
    { text: 'Hong Kong', id: 'c1' },
    { text: 'Finland', id: 'c2' },
  ]
  const [countries, setCountries] = useState(DEFAULT);

  const addCountry = enteredText => {
    setCountries(prevGoals => {
      const updatedCountries = [...prevGoals];
      updatedCountries.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedCountries;
    });
  };

  const deleteCountry = goalId => {
    setCountries(prevState => {
      const updatedCountries = prevState.filter(goal => goal.id !== goalId);
      return updatedCountries;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No countries found. Maybe add one?</p>
  );

  if (countries.length > 0) {
    content = (
      <CountriesList items={countries} onDeleteItem={deleteCountry} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CountryInput onAddCountry={addCountry} />
      </section>
      <section id="goals">
        {content}
        {/* {countries.length > 0 && (
          <CountriesList
            items={countries}
            onDeleteItem={deleteCountry}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
};

export default App;
