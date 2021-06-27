import { Form } from '@unform/web';
import styled from 'styled-components';
import Input from '../../../functional-components/input';

export const DivProducts = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem 0 1rem;
`;

export const FormSearch = styled(Form)`
  display: flex;
  align-items: center;
`;

export const BtnSearch = styled.button`
  background-color: #5b127d;
  border-radius: 30px;
  border: 0px;
  display: flex;
  padding: 0.7rem;
  z-index: 1;
`;

export const InputSearch = styled(Input)`
  background-color: rgb(224, 214, 245);
  padding-left: 2.1rem;
  position: relative;
  left: -20px;
  border: 0px;
  font-weight: bold;
  color: #301b2c;
  font-family: Titillium Web, sans-serif !important;
  width: 20vw;
  border-radius: 0px 30px 30px 0px;
  height: 2.5rem;

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    color: #301b2c;
  }
`;

export const LabelFilter = styled.label`
  font-size: 1.1rem;
  margin: 0;
`;
