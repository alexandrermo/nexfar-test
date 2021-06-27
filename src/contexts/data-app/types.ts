import React from 'react';

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

export interface DataApp {
  shoppingCard: any;
  setShoppingCard: React.Dispatch<React.SetStateAction<any>>;
  client: Client;
}

export interface DataAppProviderProps {
  children: React.ReactNode;
}
