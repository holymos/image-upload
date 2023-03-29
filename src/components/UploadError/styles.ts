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

    @media (max-width: 600px) {
      gap: 1.5rem;
    }

    @media (max-width: 300px) {
      gap: 0.5rem;
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
    background-color: ${theme.colors.gray500};
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

      &:hover {
        color: ${theme.colors.gray700};
      }
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
