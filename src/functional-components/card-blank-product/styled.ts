import { Col, Row } from 'react-bootstrap';
import styled, { css } from 'styled-components';
import { BtnIconQntProps, BtnIconTrashProps } from './types';

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
  align-items: center;
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

export const ColHeaderInfo = styled(Col)`
  padding: 0 0.5rem;
`;

export const ColInfo = styled(Col)`
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
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
  font-size: 1.2rem;
  font-weight: bold;
`;

export const ColTrash = styled(Col)`
  display: flex;
  align-items: center;
`;

export const RowInfoValues = styled(Row)`
  align-items: center;
  padding-bottom: 3rem;
`;

export const InputQnt = styled.input`
  appearance: none;
  border: 0;
  background-color: transparent;
  border-bottom: 1px solid black;
  width: 3rem;
  text-align: end;

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

export const BtnIconTrash = styled.button<BtnIconTrashProps>`
  appearance: none;
  border: 0;
  padding: 0;
  display: flex;
  align-items: flex-start;
  background-color: transparent;

  visibility: ${({ visHidden }) => (visHidden ? 'hidden' : 'unset')};
`;

export const RowFooter = styled(Row)`
  margin-left: -30px;
`;

export const SpanFooter = styled.span`
  background-color: rgb(234, 224, 245);
  border-radius: 20px;
  padding: 0.1rem 1rem;
  font-weight: bold;
  font-size: 0.9rem;
`;
