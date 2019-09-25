import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@material-ui/styles';
import Authentification from "./components/Authentification";
import {createMuiTheme, MuiThemeProvider, responsiveFontSizes} from "@material-ui/core";
import Main from "./components/Main";
import {Palette as getContrastText} from "@material-ui/core/styles/createPalette";


let theme = createMuiTheme({
    spacing: 4,
    palette: {
        primary: {
            main: "#42425E",
            light: "#A3A1F9",
            dark: "#3B3B53",
            contrastText: "#DEDCE7",
        },
        secondary: {
            light: "#F0F0FA",
            main: "#FFFFFF",
            dark: "#A4A4C0",
            contrastText: "#42425E",
        }/*,
        error: {
            light: palette.error[300],
            main: palette.error[500],
            dark: palette.error[700],
            contrastText: getContrastText(palette.error[500]),
        },*/
    },
    overrides: {
        // Style sheet name ⚛️

    }
});
 theme = responsiveFontSizes(theme);

function App() {
  return (
      <ThemeProvider theme={theme}>
          <Main/>
      </ThemeProvider>
  );
}

export default App;
