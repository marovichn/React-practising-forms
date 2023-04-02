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
  return (
    <form>
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
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
