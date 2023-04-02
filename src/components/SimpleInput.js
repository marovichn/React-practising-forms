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
  } = useInput(nameValidate);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  /* const reg = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/; */

  const isValidEmail = enteredEmail.includes("@");
  const emailInputIsInvalid = !isValidEmail && enteredEmailTouched;

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

  const onEmailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
    setEnteredEmailTouched(true);
  };

  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setEnteredEmailTouched(true);

    if (!isValidInputName || !isValidEmail) {
      return;
    }

    setEnteredEmailTouched(false);
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
