import React from 'react';
import Routes from "./containers/routes";
import NavBar from "./containers/navbar";
import {BrowserRouter} from "react-router-dom";
import Footer from "./containers/footer";
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from "./theme";
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider } from '@material-ui/core/styles';
import styled from 'styled-components';
import {Container} from "@material-ui/core";

const PageContainer = styled.div`
  min-height: 100vh;
`;


function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <div className="App">
          <CssBaseline />
          <BrowserRouter>
            <PageContainer>
              <NavBar />
              <Container maxWidth="md">
                <Routes />
              </Container>
            </PageContainer>
            <Footer />
          </BrowserRouter>
        </div>
      </StyledThemeProvider>
    </ThemeProvider>
  );
}

export default App;
