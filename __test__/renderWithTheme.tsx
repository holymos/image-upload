import { ThemeProvider } from '@emotion/react';
import { render } from '@testing-library/react';
import React from 'react';

import { theme } from '../src/styles/theme';

export const renderWithTheme = (ui: React.ReactNode) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};
