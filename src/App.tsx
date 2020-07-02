import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import light from './styles/themes/light';

import Routes from './routes';
import { AuthProvider } from './contexts/auth';

import { Container } from './components/Container';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />

      <Container>
        <AuthProvider >
          <Routes />
        </AuthProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
