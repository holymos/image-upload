import { css } from '@emotion/react';
import styled from '@emotion/styled';

type AvatarImageProps = {
  image?: string;
};

export const AvatarImage = styled.div<AvatarImageProps>`
  ${({ theme, image }) => css`
    width: 7.25rem;
    height: 7.25rem;
    border-radius: ${theme.border.full};
    background-color: ${theme.colors.gray500};
    background: ${image && `url(${image})`};
    background-position: center;
    background-size: cover;
  `}
`;
