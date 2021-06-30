import styled, { css } from 'styled-components';
import { NexButtonProps } from './types';

function getThemeCss(theme?: string) {
  switch (theme) {
    case 'nex':
      return css`
        color: white;
        background-color: #3cba92;
      `;
    default:
      return '';
  }
}

export const NexButton = styled.button.attrs(({ type, ...rest }) => ({
  type: type || 'button',
  ...rest,
}))<NexButtonProps>`
  appearance: none;
  background-color: transparent;
  letter-spacing: unset;
  border: 0;
  display: flex;
  font-size: ${({ size }) => size || 'unset'};
  border-radius: ${({ circular }) => (circular ? '30px' : 'unset')};
  padding: ${({ circular }) => (circular ? '0.5rem 1rem' : 'unset')};
  color: ${({ colorStyl }) => colorStyl || 'unset'};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'unset')};

  ${({ theme }) => getThemeCss(theme)};
`;
