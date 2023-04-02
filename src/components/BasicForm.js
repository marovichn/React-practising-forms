import useInput from "../Hooks/use-input";

const BasicForm = (props) => {
  const {
    value: nameValue,
    hasError: nameError,
    valueIsValid: nameIsValid,
    valueChangeHandler: nameValueChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetName,
  } = useInput((nameValue) => nameValue.trim() !== "");
  const nameClass = nameError ? "form-control invalid" : "form-control";

  const {
    value: lastNameValue,
    hasError: lastNameError,
    valueIsValid: lastNameIsValid,
    valueChangeHandler: lastNameValueChangeHandler,
    inputBlurHandler: lastNameInputBlurHandler,
    reset: resetLastName,
  } = useInput((lastNameValue) => lastNameValue.trim() !== "");
  const lastNameClass = lastNameError ? "form-control invalid" : "form-control";

  const {
    value: emailValue,
    hasError: emailError,
    valueIsValid: emailIsValid,
    valueChangeHandler: emailValueChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmail,
  } = useInput((emailValue) => emailValue.includes("@"));
  const emailClass = emailError ? "form-control invalid" : "form-control";

  const submitHandler = (e) => {
    e.preventDefault();
    if (!emailIsValid || !nameIsValid || !lastNameIsValid) {
      return;
    }

    resetName();
    resetLastName();
    resetEmail();
  };

  let formIsValid = false;
  if (emailIsValid && nameIsValid && lastNameIsValid) {
    formIsValid = true;
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={nameClass}>
          <label htmlFor="name">First Name</label>
          <input
            onChange={nameValueChangeHandler}
            onBlur={nameInputBlurHandler}
            value={nameValue}
            type="text"
            id="name"
          />
          {nameError && <p className="error-text">Required field*</p>}
        </div>
        <div className={lastNameClass}>
          <label htmlFor="name">Last Name</label>
          <input
            onChange={lastNameValueChangeHandler}
            onBlur={lastNameInputBlurHandler}
            value={lastNameValue}
            type="text"
            id="name"
          />
          {lastNameError && <p className="error-text">Required field*</p>}
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          onChange={emailValueChangeHandler}
          onBlur={emailInputBlurHandler}
          value={emailValue}
          type="text"
          id="name"
        />
        {emailError && <p className="error-text">Required field*</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
