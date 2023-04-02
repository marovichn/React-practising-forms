import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const isValidInput = enteredName.trim() !== "";
  const nameInputIsInvalid = !isValidInput && enteredNameTouched;

  useEffect(() => {
    if (isValidInput) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [isValidInput]);

  const nameInputClasses = !nameInputIsInvalid
    ? "form-control"
    : "form-control invalid";

  const onChangeHandler = (e) => {
    setEnteredName(e.target.value);
    setEnteredNameTouched(true);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setEnteredNameTouched(true);
    if (!isValidInput) {
      return;
    }

    setEnteredNameTouched(false);
    setEnteredName("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          onBlur={nameInputBlurHandler}
          onChange={onChangeHandler}
          value={enteredName}
          type="text"
          id="name"
        />
      </div>
      {nameInputIsInvalid && (
        <p className="error-text">This field is required*</p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
