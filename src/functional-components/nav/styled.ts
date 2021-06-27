import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../icon';

export const NavStyl = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const DivClient = styled.div`
  display: flex;
  align-items: center;
  cursor: default;
`;

export const DivCliData = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DivItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SpanNavHeader = styled.span`
  font-weight: bold;
  letter-spacing: 1.5px;
`;

export const DivItem = styled.div`
  display: flex;
  color: #a6a6a6;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    color: #3cba92;
  }
`;

export const NavLinkStyl = styled(NavLink)`
  color: unset;
  width: 100%;
  padding: 0.7rem 0;
  border-radius: 20px 0 0 20px;
  display: flex;

  &:hover {
    text-decoration: none;
    color: #3cba92;
  }
`;

export const IconNav = styled(Icon)`
  font-size: 1.5rem;
`;
