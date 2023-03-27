import { Global, ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { UserProvider } from './contexts/user';
import { globalStyles } from './styles/global';
import { theme } from './styles/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Global styles={globalStyles} />
        <App />
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>
);
