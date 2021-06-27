import { Col, Row } from 'react-bootstrap';
import styled, { css } from 'styled-components';
import Icon from '../icon';
import Input from '../input';
import { BtnIconQntProps, ColInfoProps } from './types';

export const SpanSku = styled.span`
  background-color: #301b2c;
  border-radius: 20px;
  padding: 0 1rem;
  color: white;
`;

export const SpanName = styled.span`
  font-weight: bold;
`;

export const LiTooltip = styled.li`
  text-align: left;
`;

export const RowHeader = styled(Row)`
  border-bottom: 1px solid #cccccc;
  margin: 0;
  padding-bottom: 0.5rem;
`;

export const ColImg = styled(Col)`
  display: flex;
  justify-content: center;
`;

export const ImgProduct = styled.img`
  height: 150px;
`;

export const ColBody = styled(Col)`
  display: flex;
  flex-direction: column;
`;

export const RowInfo = styled(Row)`
  border-bottom: 1px solid #cccccc;
  margin: 0;
`;

export const ColInfo = styled(Col)<ColInfoProps>`
  display: flex;
  flex-direction: ${({ quantity }) => (quantity ? 'row' : 'column')};
  align-items: ${({ flexStart }) => (flexStart ? 'flex-start' : 'unset')};
`;

export const SpanWithoutSt = styled.span`
  font-size: 0.8rem;
`;

export const BtnWarnMe = styled.button`
  appearance: none;
  border: 0;
  border-radius: 20px;
  padding: 0 10px;
  font-weight: bold;
  background-color: #d9d9d9;
`;

export const SpanHeaderInfo = styled.span`
  color: #808080;
`;

export const SpanPrice = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
`;

export const ColTrash = styled(Col)`
  display: flex;
  align-items: center;
`;

export const RowInfoValues = styled(Row)`
  align-items: center;
`;

export const InputQnt = styled.input`
  appearance: none;
  border: 0;
  background-color: transparent;
  border-bottom: 1px solid black;
  width: 3rem;
  &:focus-visible {
    outline: none;
  }

  @media (max-width: 1350px) {
    width: 3.5rem;
  }
`;

export const BtnIconQnt = styled.button<BtnIconQntProps>`
  appearance: none;
  border: 0;
  padding: 0;
  display: flex;
  align-items: flex-start;
  background-color: transparent;

  ${({ typeIcon }) =>
    typeIcon === 'remove'
      ? css`
          margin-right: 5px;

          @media (max-width: 1420px) {
            margin-right: 0;
          }
        `
      : css`
          margin-left: 5px;
          margin-top: 2px;

          @media (max-width: 1420px) {
            margin-left: 0;
          }
        `}
`;
