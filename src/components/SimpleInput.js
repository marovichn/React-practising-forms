import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");

  /*  const onChangeHandler = (e) => {
    setEnteredName(e.target.value);
  }; */

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setEnteredName(nameInputRef.current.value);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
