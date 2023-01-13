import { useState } from 'react';
import Button from '../../UI/Button/Button';
import './CountryInput.css';

const CountryInput = (props) => {
  const [country, setCountry] = useState('');

  const countryInput = event => {
    setCountry(event.target.value);
  };

  const submitForm = event => {
    event.preventDefault();
    props.onAddCountry(country);
  };

  return (
    <form onSubmit={submitForm}>
      <div className="form-control">
        <label>which country next?</label>
        <input type="text" onChange={countryInput} />
      </div>
      <Button type="submit">Add country</Button>
    </form>
  );
};

export default CountryInput;
