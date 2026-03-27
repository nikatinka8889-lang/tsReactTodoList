import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  text: string;
}

const initialState: FormState = {
  text: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setText(state, action: PayloadAction<string>) {
      state.text = action.payload;
    },
    clearText(state) {
      state.text = "";
    },
  },
});

export const { setText, clearText } = formSlice.actions;
export default formSlice.reducer;