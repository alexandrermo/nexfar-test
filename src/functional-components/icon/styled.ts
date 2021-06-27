import styled from 'styled-components';
import { IconStylProps } from './types';

export const IconStyl = styled.i<IconStylProps>`
  color: ${({ color }) => color || 'unset'};
  font-size: ${({ size }) => size || 'unset'};
  cursor: ${({ cursor }) => cursor || 'unset'};

  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &.icon-information-outline:before {
    content: '';
  }
  &.icon-add-outline:before {
    content: '';
  }
  &.icon-search:before {
    content: '';
  }
  &.icon-arrow-right:before {
    content: '';
  }
  &.icon-arrow-left:before {
    content: '';
  }
  &.icon-shop:before {
    content: '';
  }
  &.icon-paperplane:before {
    content: '';
  }
  &.icon-document-list:before {
    content: '';
  }
  &.icon-basket:before {
    content: '';
  }
  &.icon-box:before {
    content: '';
  }
  &.icon-barcode:before {
    content: '';
  }
  &.icon-whatsapp:before {
    content: '';
  }
  &.icon-ticket:before {
    content: '';
  }
  &.icon-arrow_forward_ios:before {
    content: '';
  }
  &.icon-arrow_back_ios:before {
    content: '';
  }
  &.icon-arrow_drop_up:before {
    content: '';
  }
  &.icon-arrow_drop_down:before {
    content: '';
  }
  &.icon-keyboard_arrow_up:before {
    content: '';
  }
  &.icon-keyboard_arrow_right:before {
    content: '';
  }
  &.icon-keyboard_arrow_left:before {
    content: '';
  }
  &.icon-keyboard_arrow_down:before {
    content: '';
  }
  &.icon-remove_circle_outline:before {
    content: '';
  }
  &.icon-local_fire_department:before {
    content: '';
  }
  &.icon-notifications_none:before {
    content: '';
  }
  &.icon-trash:before {
    content: '';
  }
  &.icon-phone:before {
    content: '';
  }
  &.icon-shopping-cart:before {
    content: '';
  }
  &.icon-archive:before {
    content: '';
  }
`;
