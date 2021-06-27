import { Col } from 'react-bootstrap';
import styled from 'styled-components';

export const HeaderStyl = styled.header`
  border-bottom: 3px solid #3cba92;
`;

export const ColRight = styled(Col)`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DivCart = styled.div`
  color: #3cba92;
`;

export const DivU = styled.div`
  border-radius: 20px;
  background-color: #3cba92;
  height: 2.7rem;
  text-align: center;
  width: 2.7rem;
  font-size: 2.2rem;
  line-height: 1.3;
  color: white;
`;
