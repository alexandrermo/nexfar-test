import React from 'react';
import { DataApp, DataAppProviderProps } from './types';

const DataAppContext = React.createContext<DataApp>({} as DataApp);

export const DataAppProvider: React.FC<DataAppProviderProps> = ({
  children,
}: DataAppProviderProps) => {
  const client = {
    id: 62416,
    name: 'DROGARIA GIMENEZ',
    razaoSocial: 'BENERVAU & CLAUDIO DROGARIA LTDA - ME',
    cnpj: '20269237000180',
    externalClientId: 'C00068861',
    address: {
      cep: '06036007',
      address: 'AVENIDA PADRE VICENTE MELILLO, 1906 - UMUARAMA',
      city: 'OSASCO',
      state: 'SP',
    },
  };

  const [shoppingCard, setShoppingCard] = React.useState({
    createdAt: 0,
    updatedAt: 0,
    client,
    id: 0,
    base: 'Nexfar',
    items: [],
    grossTotal: 0,
    netTotal: 0,
    discount: 0,
    totalWithTaxes: 0,
    label: '163892',
  });

  return (
    <DataAppContext.Provider
      value={{
        shoppingCard,
        setShoppingCard,
        client,
      }}
    >
      {children}
    </DataAppContext.Provider>
  );
};

export function useDataApp() {
  const context = React.useContext(DataAppContext);

  if (!context) {
    throw new Error('useDataApp must be used within an DataAppProvider');
  }

  return context;
}
