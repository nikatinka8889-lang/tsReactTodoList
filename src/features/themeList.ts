import { createSlice } from "@reduxjs/toolkit";
import { Theme } from "../models/theme";
import { themes } from "../Styles/themes";

interface ThemeState {
  theme: Theme;
}

const initialState: ThemeState = {
  theme: themes['light'],
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleThemeAction: (state)=>{
        state.theme = state.theme.name === 'light'? themes['dark'] : themes['light']
    }
  },
});

export const { toggleThemeAction} = themeSlice.actions;
export default themeSlice.reducer;