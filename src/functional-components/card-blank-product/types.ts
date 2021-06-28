import { HTMLAttributes } from 'react';
import { Product } from '../../assets/data/types';

export interface BtnIconQntProps {
  typeIcon: 'add' | 'remove';
}

export interface CardBlankProductProps extends HTMLAttributes<HTMLDivElement> {
  product: Product;
}

export interface BtnIconTrashProps {
  visHidden?: boolean;
}
