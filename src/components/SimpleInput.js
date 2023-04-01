import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [isValidInput, setIsValidInput] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const onChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setIsValidInput(false);

      return;
    }
    setIsValidInput(true);

    const inputName = nameInputRef.current.value;
    console.log(inputName);

    setEnteredName("");
  };

  const nameInputIsInvalid = !isValidInput && enteredNameTouched;

  const nameInputClasses = !nameInputIsInvalid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={onChangeHandler}
          ref={nameInputRef}
          value={enteredName}
          type="text"
          id="name"
        />
      </div>
      {nameInputIsInvalid && (
        <p className="error-text">This field is required*</p>
      )}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
