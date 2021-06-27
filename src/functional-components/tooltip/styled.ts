import styled from 'styled-components';
import { DivTooltipTextProps } from './types';

export const DivTooltipText = styled.div<DivTooltipTextProps>`
  visibility: hidden;
  max-width: 300px;
  background-color: #3cba92;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  opacity: 0;
  transition: opacity 0.3s;
  overflow-wrap: break-word;
  transform: translate(-50%);
  min-width: ${({ minWidth }) => minWidth || 'unset'};

  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #3cba92 transparent transparent transparent;
  }
`;

export const DivTooltip = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${DivTooltipText} {
    visibility: visible;
    opacity: 1;
  }
`;
