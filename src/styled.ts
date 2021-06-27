import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

export const ColRoutes = styled(Col)`
  background-color: rgb(245, 245, 255);
`;

export const DivAllScreen = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const ContainerGrow = styled(Container)`
  flex-grow: 1;
  padding: 0;
`;

export const Row100 = styled(Row)`
  height: 100%;
  margin: 0;
`;
