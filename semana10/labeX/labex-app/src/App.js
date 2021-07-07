import React from 'react';
import Router from './route/Router.jsx'
import { GlobalStyle, Container } from './style.jsx'

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Router />
    </Container>
  );
}

export default App;