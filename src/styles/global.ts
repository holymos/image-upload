import { css } from '@emotion/react';

export const globalStyles = css`
  #root {
    padding: 2rem;
    margin: 0 auto;
    max-width: 1280px;
    text-align: center;
  }

  * {
    margin: 0;
    padding: 0;
    border: none;
    font-size: 1rem;
    font-weight: 400;
    background: none;
    box-sizing: border-box;
    transition: all ease 0.2s;
    font-family: 'Inter', 'sans-serif';

    font-synthesis: none;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    overflow: overlay;
  }

  @keyframes loading {
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(360deg);
    }
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`;
