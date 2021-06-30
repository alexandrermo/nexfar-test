import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import { LinkStyl } from '../../styled-components/link-styl';
import Icon from '../icon';

export const HeaderStyl = styled.header`
  border-bottom: 3px solid #3cba92;
`;

export const ColRight = styled(Col)`
  margin-left: auto;
`;

export const LinkCart = styled(LinkStyl)`
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

export const IconNoti = styled(Icon)`
  position: relative;
  &:after {
    content: '3';
    top: 0;
    display: flex;
    left: 40%;
    align-items: center;
    justify-content: center;
    background-color: #f62854;
    border-radius: 30px;
    color: white;
    position: absolute;
    font-size: 0.7rem;
    padding: 0.2rem 0.4rem;
    font-family: Arial, sans-serif;
    text-align: center;
    vertical-align: middle;
  }
`;
