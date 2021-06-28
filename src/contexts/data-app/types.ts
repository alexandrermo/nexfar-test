import React from 'react';
import { Product } from '../../assets/data/types';

export interface Client {
  id: number;
  name: string;
  razaoSocial: string;
  cnpj: string;
  externalClientId: string;
  address: {
    cep: string;
    address: string;
    city: string;
    state: string;
  };
}

export interface ReduceActionShpCard {
  type: 'change';
  product: Product;
  quantity: number;
}

export interface ItemShopCard {
  product: Omit<Product, 'price' | 'quantityAvailable'>;
  quantity: number;
  pmcPrice: number;
  industryPrice: number;
  originalPrice: Omit<Product['price'], 'pmcPrice' | 'industryPrice'>;
  createdAt: number;
}

export interface ShoppingCard {
  createdAt: number;
  updatedAt: number;
  client: Client;
  id: number;
  base: 'Nexfar';
  items: ItemShopCard[];
  grossTotal: number;
  netTotal: number;
  discount: number;
  totalWithTaxes: number;
  label: '163892';
}

export interface DataApp {
  shoppingCard: [ShoppingCard];
  dispatchShoppingCard: React.Dispatch<ReduceActionShpCard>;
  client: Client;
  itemCard?: ItemShopCard;
}

export interface DataAppProviderProps {
  children: React.ReactNode;
  shoppingCardPersisted: [ShoppingCard] | null;
}
