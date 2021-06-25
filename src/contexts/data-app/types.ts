import React from 'react';

export interface DataApp {
  shoppingCard: any;
  setShoppingCard: React.Dispatch<React.SetStateAction<any>>;
  client: any;
}

export interface DataAppProviderProps {
  children: React.ReactNode;
}
