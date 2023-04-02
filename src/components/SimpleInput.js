import { useEffect, useState } from "react";
import useInput from "../Hooks/use-input";

const SimpleInput = (props) => {
  const nameValidate = (enteredName) => {
    return enteredName.trim() !== "";
  };
  const {
    value: enteredName,
    hasError: nameInputIsInvalid,
    valueIsValid: isValidInputName,
    valueChangeHandler: onChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetName,
  } = useInput(nameValidate);

  const emailValidate = (enteredEmail) => {
    return enteredEmail.includes("@");
  };
  const {
    value: enteredEmail,
    hasError: emailInputIsInvalid,
    valueIsValid: isValidEmail,
    valueChangeHandler: onEmailChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmail,
  } = useInput(emailValidate);

  let formIsValid = false;
  if (isValidInputName && isValidEmail) {
    formIsValid = true;
  }

  const nameInputClasses = !nameInputIsInvalid
    ? "form-control"
    : "form-control invalid";

  const emailInputClasses = !emailInputIsInvalid
    ? "form-control"
    : "form-control invalid";

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!isValidInputName || !isValidEmail) {
      return;
    }
    resetName();
    resetEmail();
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
        <label htmlFor="name">Your E-mail</label>
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
