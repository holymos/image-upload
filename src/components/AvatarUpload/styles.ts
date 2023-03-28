import { css } from '@emotion/react';
import styled from '@emotion/styled';

type FormProps = {
  isDragActive: boolean;
};

export const Upload = styled.label<FormProps>`
  ${({ theme, isDragActive }) => css`
    width: 100%;
    padding: 1rem;
    height: 12rem;
    color: ${theme.colors.gray800};
    font-size: 0.875rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    border-width: 2px;
    border-radius: ${theme.border.md};
    border-style: dashed;
    border-color: #cbd5e1;
    background-color: ${!isDragActive
      ? theme.colors.gray400
      : theme.colors.gray300};

    p {
      color: ${theme.colors.gray700};
      font-size: 0.75rem;
      font-weight: 300;
    }

    input {
      display: none;
    }

    #drag-file-element {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 1rem;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
    }
  `}
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  h2 {
    font-weight: 500;
  }
`;
