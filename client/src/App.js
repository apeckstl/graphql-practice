import React, { Component } from "react";
import Header from './Components/Header';
import Main from './Components/Main';
import "./App.css";
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

class App extends Component {

    render() {
        return (
            <div className="App">
              <ThemeProvider theme={theme}>
                <Header/>
                <Main/>
              </ThemeProvider>
            </div>
        );
    }
}

export default App;