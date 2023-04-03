import { useState, useReducer } from "react";

const initialState = {
  value: "",
  isTouched: false,
};
const inputStateReducer = (state, action) => {
  if (action.type === "VALUE_TOUCHED") {
    return {
      value: action.value,
      isTouched: true,
    };
  }
  if (action.type === "BLUR") {
    return {
      value: state.value,
      isTouched: true,
    };
  }
  if (action.type === "RESET") {
    return {
      value: "",
      isTouched: false,
    };
  }
  return initialState;
};

const useInput = (validateValue) => {
  const [inputState, setInputState] = useReducer(
    inputStateReducer,
    initialState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (e) => {
    setInputState({ type: "VALUE_TOUCHED", value: e.target.value });
  };

  const inputBlurHandler = () => {
    setInputState({ type: "BLUR" });
  };

  const reset = () => {
    setInputState({ type: "RESET" });
  };

  return {
    value: inputState.value,
    hasError,
    valueIsValid,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};
export default useInput;
