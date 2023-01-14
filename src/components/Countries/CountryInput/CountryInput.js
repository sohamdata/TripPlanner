import { useState } from 'react';
import Button from '../../UI/Button/Button';
import './CountryInput.css';

const CountryInput = (props) => {
  const [country, setCountry] = useState('');
  const [isValid, setIsValid] = useState(true);

  const countryInput = event => {
    setCountry(event.target.value);
  };

  const submitForm = event => {
    event.preventDefault();
    if (country.trim().length === 0 || country.trim().toLowerCase() === "france") {
      setIsValid(false)
      setCountry('')
      return
    }
    setIsValid(true)
    props.onAddCountry(country);
    setCountry('');
  };

  return (
    <form onSubmit={submitForm}>
      <div className={isValid ? "form-control" : "form-control invalid"}>
        <label>which country next?</label>
        <input type="text" value={country} onChange={countryInput} />
      </div>
      <Button type="submit">Add country</Button>
    </form>
  );
};

export default CountryInput;