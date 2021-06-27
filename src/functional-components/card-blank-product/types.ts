import { HTMLAttributes } from 'react';
import { Product } from '../../assets/data/types';

export interface BtnIconQntProps {
  typeIcon: 'add' | 'remove';
}

export interface ColInfoProps {
  flexStart?: boolean;
  quantity?: boolean;
}

export interface CardBlankProductProps extends HTMLAttributes<HTMLDivElement> {
  product: Product;
}
