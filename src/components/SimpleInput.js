import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [isValidInput, setIsValidInput] = useState(true);

  const onChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (enteredName.trim() === "") {
      setIsValidInput(false);
      console.error(
        "Invalid input!!!" + "( errorCheck: " + !isValidInput + " )"
      );

      return;
    }
    setIsValidInput(true);

    const inputName = nameInputRef.current.value;
    console.log(inputName);

    setEnteredName("");
  };

  const nameInputClasses = !isValidInput
    ? "form-control invalid"
    : "form-control";

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
      {!isValidInput && <p className="error-text">This field is required*</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
