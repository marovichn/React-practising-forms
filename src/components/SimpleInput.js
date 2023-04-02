import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  /* const reg = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/; */

  const isValidInput = enteredName.trim() !== "";
  const isValidEmail = enteredEmail.includes("@");
  const nameInputIsInvalid = !isValidInput && enteredNameTouched;
  const emailInputIsInvalid = !isValidEmail && enteredEmailTouched;
  let formIsValid = false;

  if (isValidInput && isValidEmail) {
    formIsValid = true;
  }

  const nameInputClasses = !nameInputIsInvalid
    ? "form-control"
    : "form-control invalid";
  const emailInputClasses = !emailInputIsInvalid
    ? "form-control"
    : "form-control invalid";

  const onChangeHandler = (e) => {
    setEnteredName(e.target.value);
    setEnteredNameTouched(true);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  const onEmailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
    setEnteredEmailTouched(true);
  };

  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if (!isValidInput || !isValidEmail) {
      return;
    }

    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
    setEnteredName("");
    setEnteredEmail("");
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
      <div className={emailInputClasses}>
        <label htmlFor="name">Your Email</label>
        <input
          onBlur={emailInputBlurHandler}
          onChange={onEmailChangeHandler}
          value={enteredEmail}
          type="text"
          id="name"
        />
      </div>
      {emailInputIsInvalid && (
        <p className="error-text">This field is required*</p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
