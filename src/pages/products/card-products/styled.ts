import { Form } from '@unform/web';
import styled from 'styled-components';
import Input from '../../../functional-components/input';
import { BtnPageNumberProps } from './types';

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

export const DivCardsProducts = styled.div`
  max-height: 70vh;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #5b127d;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
`;

export const DivPages = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BtnPageNumber = styled.button.attrs({
  type: 'button',
})<BtnPageNumberProps>`
  appearance: none;
  border-radius: 30px;
  border: 0px;
  display: flex;
  padding: 0.1rem 0.65rem;
  background-color: ${({ active }) => (active ? '#3cba92' : 'transparent')};
  color: ${({ active }) => (active ? 'white' : 'unset')};
`;

export const BtnPageArrow = styled.button.attrs({ type: 'button' })`
  border: 0px;
  display: flex;
  background-color: transparent;
  appearance: none;
  align-items: center;
  padding: 0;
  margin: 0 0.5rem;
`;
