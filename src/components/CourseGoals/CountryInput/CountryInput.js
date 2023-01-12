import { useState } from 'react';
import Button from '../../UI/Button/Button';
import './CountryInput.css';

const CourseInput = (props) => {
  const [goal, setGoal] = useState('');

  const goalInput = event => {
    setGoal(event.target.value);
  };

  const submitForm = event => {
    event.preventDefault();
    props.onAddGoal(goal);
  };

  return (
    <form onSubmit={submitForm}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={goalInput} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
