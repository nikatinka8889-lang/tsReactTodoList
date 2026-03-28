import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store";
import { clearText, setText } from "../../features/formSlice";
import {  FormBlock, FormControl, FormField, FormLabel, FormWrapper,} from "./Form.styled";
import plusIkon from '../../assets/images/plus.png'
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
    <FormWrapper>
      <FormBlock onSubmit={formSubmit}>
        <FormLabel>
          <FormField
            type="text"
            value={text}
            onChange={(e) => dispatch(setText(e.target.value))}
          />
          <FormControl icon={plusIkon}/>
        </FormLabel>
      </FormBlock>
    </FormWrapper>
  );
}