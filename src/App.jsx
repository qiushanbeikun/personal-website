import React from 'react';
import Routes from "./containers/routes";
import NavBar from "./containers/navbar";
import {BrowserRouter} from "react-router-dom";
import FooterPage from "./containers/footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes />
        <FooterPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
