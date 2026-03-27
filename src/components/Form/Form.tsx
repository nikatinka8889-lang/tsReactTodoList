import React from "react";
import "./Form.scss";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store";
import { clearText, setText } from "../../features/formSlice";

export default function Form(props: { createNewToDo: (text: string) => void }) {
  const dispatch = useDispatch();
  const text = useSelector((state: RootState) => state.form.text);

  const formSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (text) {
      props.createNewToDo(text);
      dispatch(clearText());
    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={formSubmit}>
        <label>
          <input
            type="text"
            value={text}
            onChange={(e) => dispatch(setText(e.target.value))}
          />
          <button></button>
        </label>
      </form>
    </div>
  );
}