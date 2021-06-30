import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { RowHeaderProps } from './types';

export const DivCardBlank = styled.div`
  background-color: #fff;
  box-shadow: 0 10px 20px 1px rgb(0 0 0 / 5%);
  border-radius: 10px;
  padding: 1rem 2rem;
`;

export const RowHeader = styled(Row)<RowHeaderProps>`
  border-bottom: 1px solid #cccccc;
  margin: 0;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: ${({ size }) => size || '1.3rem'};
  font-weight: ${({ notBold }) => (notBold ? 'unset' : 'bold')};
`;

export const ColStart = styled(Col).attrs({ xs: 'auto' })`
  margin-left: 0;
`;
