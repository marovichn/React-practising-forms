import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [InvalidInput, setInvalidInput] = useState(false);

  const onChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (enteredName.trim() === "") {
      setInvalidInput(true);
      console.error(
        "Invalid input!!!" + "( errorCheck: " + !InvalidInput + " )"
      );

      return;
    }

    const inputName = nameInputRef.current.value;
    console.log(inputName);

    setEnteredName("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          onChange={onChangeHandler}
          ref={nameInputRef}
          value={enteredName}
          type="text"
          id="name"
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
