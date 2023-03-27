import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      white500: string;

      gray300: string;
      gray400: string;
      gray500: string;
      gray600: string;
      gray700: string;
      gray900: string;

      blue300: string;
      blue500: string;
    };

    border: {
      md: string;
      lg: string;
      xl: string;
      full: string;
    };
  }
}
