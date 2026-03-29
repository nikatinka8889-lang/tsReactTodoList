import { Theme, Themes } from "../models/theme";

const light: Theme = {
  name: 'light',
  colors: {
    backgroundPrimary: '#4682b4',
    backgaroundSecondary: 'rgb(237, 240, 241)',
  }
}

const dark: Theme = {
  name: 'dark',
  colors: {
    backgroundPrimary: 'black',
    backgaroundSecondary: 'gray',
  }
}

export const themes:Themes = { light, dark };

