import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 1rem;
    height: 12rem;
    color: ${theme.colors.gray800};
    font-size: 0.875rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    border-radius: ${theme.border.md};
    background-color: ${theme.colors.gray400};

    button {
      cursor: pointer;
    }

    canvas {
      border-radius: ${theme.border.full};
    }

    @media (max-width: 600px) {
      gap: 1.5rem;
    }

    @media (max-width: 300px) {
      gap: 0.5rem;
    }
  `}
`;

export const Controls = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.75rem;

    span {
      align-self: flex-start;
      font-size: 1rem;
    }

    button {
      align-self: flex-end;
      padding: 0.5rem 2rem;
      border-radius: ${theme.border.xl};
      background-color: ${theme.colors.gray800};
      color: ${theme.colors.white500};
    }
  `}
`;

type SliderProps = {
  sliderValue: number;
};

export const Slider = styled.input<SliderProps>`
  ${({ theme, sliderValue }) => css`
    -webkit-appearance: none;
    width: 276px;
    height: 3px;
    background: ${theme.colors.blue300};
    border-radius: ${theme.border.md};
    background-image: linear-gradient(
      ${theme.colors.blue500},
      ${theme.colors.blue500}
    );
    background-size: ${(sliderValue - 1) * 100}% 100%;
    background-repeat: no-repeat;

    &[type='range']::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 15px;
      width: 15px;
      border-radius: ${theme.border.full};
      background: ${theme.colors.blue500};
      cursor: ew-resize;
      box-shadow: 0 0 2px 0 #555;
      transition: background 0.3s ease-in-out;
    }

    &[type='range']::-webkit-slider-runnable-track {
      -webkit-appearance: none;
      box-shadow: none;
      border: none;
      background: transparent;
    }

    @media (max-width: 600px) {
      width: 120px;
    }

    @media (max-width: 300px) {
      width: 80px;
    }
  `}
`;

export const CloseButton = styled.button`
  margin-top: 1rem;
  align-self: flex-start;
`;

export const FallbackImage = styled.div`
  ${({ theme }) => css`
    width: 120px;
    height: 120px;
    border-radius: ${theme.border.full};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.gray700};
    flex-shrink: 0;

    svg {
      width: 35px;
      height: 35px;
    }

    @media (max-width: 800px) {
      width: 95px;
      height: 95px;

      svg {
        width: 25px;
        height: 25px;
      }
    }

    @media (max-width: 400px) {
      width: 70px;
      height: 70px;

      svg {
        width: 15px;
        height: 15px;
      }
    }
  `}
`;

export const ErrorMessage = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.5rem;

    span {
      font-size: 1rem;
      text-align: left;
      color: ${theme.colors.red500};
    }

    button {
      background: none;
      text-decoration: underline;
      color: ${theme.colors.gray900};
    }

    @media (max-width: 300px) {
      span {
        font-size: 0.75rem;
      }

      button {
        font-size: 0.65rem;
      }
    }
  `}
`;
