import React from 'react';
import Routes from "./containers/routes";
import NavBar from "./containers/navbar";
import {BrowserRouter} from "react-router-dom";
import Footer from "./containers/footer";
import CssBaseline from '@material-ui/core/CssBaseline';
import {theme} from "./theme";
import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import {ThemeProvider} from '@material-ui/core/styles';
import styled from 'styled-components';
import DefaultBackground from "./backg.jpg"

import "./appStyles.css"



const PageContainer = styled.div`
  min-height: 100vh;
`;

/*document.body.style.backgroundImage = DefaultBackground;
document.body.style.backgroundPosition = "center";
document.body.style.backgroundAttachment = "fixed";*/


function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <div className="App">
          <CssBaseline/>
          <BrowserRouter>
            <PageContainer>
              <NavBar/>
              <Routes/>
            </PageContainer>
            <Footer/>
          </BrowserRouter>
        </div>
      </StyledThemeProvider>
    </ThemeProvider>
  );
}

export default App;
