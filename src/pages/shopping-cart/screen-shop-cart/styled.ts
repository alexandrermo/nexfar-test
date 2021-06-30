import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import { RowScreen } from '../../../styled-components/container-screen';
import { LinkStyl } from '../../../styled-components/link-styl';
import { NexButton } from '../../../styled-components/nex-button';
import { BtnSubLinkProps } from './types';

export const RowRem = styled(RowScreen)`
  font-size: 1rem;
  font-weight: bold;
  font-family: Arial, sans-serif;
`;

export const LinkBack = styled(LinkStyl)`
  align-items: center;
`;

export const BtnSubLink = styled(NexButton)<BtnSubLinkProps>`
  padding-bottom: 0.2rem;
  color: ${({ active }) => (active ? '#3cba92' : 'unset')};
  border-bottom: ${({ active }) => (active ? '3px solid #3cba92' : 'unset')};
`;

export const SpanFootProd = styled.span`
  font-size: 0.8rem;
  color: #737373;
`;

export const ColFlexCol = styled(Col)`
  flex-direction: column;
  font-size: ${({ size }) => size || 'unset'};
`;

export const SpanIdCli = styled.span`
  padding: 0.2rem 0.8rem;
  border-radius: 30px;
  background-color: #301b2c;
  color: white;
`;

export const SpanBold = styled.span`
  font-weight: bold;
`;
