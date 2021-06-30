import React from 'react';
import { Product } from '../../assets/data/types';
import { deepCopy, deleteProps } from '../../lib/util';
import {
  Client,
  DataApp,
  DataAppProviderProps,
  ItemShopCard,
  ReduceActionShpCard,
  ShoppingCard,
} from './types';

const DataAppContext = React.createContext<DataApp>({} as DataApp);

function calculeNewValShpCard(
  shoppingCardObj: ShoppingCard,
  idxItem: number | null,
  product: Product,
  quantity: number
) {
  const {
    price: prodPrice,
    taxes: prodTaxes,
    discount: prodDiscount,
  } = product.price;

  const difGrossTotal = prodPrice * quantity;
  const difTaxes = prodTaxes * quantity;
  const difDiscount = prodDiscount * quantity;
  if (idxItem) {
    const oldOrigiPri = shoppingCardObj.items[idxItem].originalPrice;

    Object.assign(oldOrigiPri, {
      taxes: oldOrigiPri.taxes + difTaxes,
      discount: oldOrigiPri.discount + difDiscount,
    });
  }

  shoppingCardObj.grossTotal += difGrossTotal;

  shoppingCardObj.discount += difDiscount;

  shoppingCardObj.netTotal =
    shoppingCardObj.grossTotal - shoppingCardObj.discount;

  shoppingCardObj.totalWithTaxes += difGrossTotal - difDiscount + difTaxes;
}

function reduceShoppingCard(
  prevShoppingCard: [ShoppingCard],
  { product: productChange, quantity: newQuantity, type }: ReduceActionShpCard
) {
  const itemsOld = prevShoppingCard[0].items;

  if (type === 'clear') {
    if (itemsOld.length === 0) {
      return prevShoppingCard;
    }

    const newShoppingCard = deepCopy<[ShoppingCard]>(prevShoppingCard);
    const [newObjShpCart] = newShoppingCard;

    newObjShpCart.items = [];

    newObjShpCart.updatedAt = new Date().getTime();

    newObjShpCart.discount = 0;
    newObjShpCart.grossTotal = 0;
    newObjShpCart.netTotal = 0;
    newObjShpCart.totalWithTaxes = 0;

    return newShoppingCard;
  }

  if (!productChange || newQuantity === undefined) {
    throw new Error(
      'reduceShoppingCard: Para o type change é necessário haver product e quantity'
    );
  }

  const idxItemCard = itemsOld.findIndex(
    ({ product }) => product.id === productChange.id
  );

  if (
    (idxItemCard !== -1 && itemsOld[idxItemCard].quantity === newQuantity) ||
    (idxItemCard === -1 && newQuantity === 0)
  ) {
    return prevShoppingCard;
  }

  const newShoppingCard = deepCopy<[ShoppingCard]>(prevShoppingCard);

  const newShpCardObj = newShoppingCard[0];
  const itemsNew = newShpCardObj.items;
  const timestampNow = new Date().getTime();
  newShpCardObj.updatedAt = timestampNow;

  if (idxItemCard === -1) {
    const newProduct = deepCopy<Product>(productChange);
    const newOriginalPrice = deepCopy<Product['price']>(newProduct.price);
    deleteProps(newProduct, 'price', 'quantityAvailable');
    deleteProps(newOriginalPrice, 'pmcPrice', 'industryPrice');

    newOriginalPrice.taxes *= newQuantity;
    newOriginalPrice.discount *= newQuantity;

    const newItemProduct = {
      product: newProduct,
      quantity: newQuantity,
      pmcPrice: productChange.price.pmcPrice,
      industryPrice: productChange.price.industryPrice,
      originalPrice: newOriginalPrice,
      createdAt: timestampNow,
    };

    itemsNew.push(newItemProduct);

    calculeNewValShpCard(newShpCardObj, null, productChange, newQuantity);
  } else if (newQuantity === 0) {
    const itemCardNew = itemsNew[idxItemCard];

    itemsNew.splice(idxItemCard, 1);

    calculeNewValShpCard(
      newShpCardObj,
      null,
      productChange,
      -itemCardNew.quantity
    );
  } else {
    const itemCardNew = itemsNew[idxItemCard];
    const difQuantity = newQuantity - itemCardNew.quantity;
    itemCardNew.quantity = newQuantity;

    calculeNewValShpCard(newShpCardObj, null, productChange, difQuantity);
  }

  try {
    localStorage.setItem('shoppingCard', JSON.stringify(newShoppingCard));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Erro localStorage shoppingCard reduceShoppingCard', error);
  }

  return newShoppingCard;
}

export const DataAppProvider: React.FC<DataAppProviderProps> = ({
  shoppingCardPersisted,
  children,
}: DataAppProviderProps) => {
  const client: Client = {
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

  const [shoppingCard, dispatchShoppingCard] = React.useReducer(
    reduceShoppingCard,
    shoppingCardPersisted || [
      {
        createdAt: new Date().getTime(),
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
      },
    ]
  );

  return (
    <DataAppContext.Provider
      value={{
        shoppingCard,
        dispatchShoppingCard,
        client,
      }}
    >
      {children}
    </DataAppContext.Provider>
  );
};

export function useDataApp(idProduct?: string): DataApp {
  const context = React.useContext(DataAppContext);

  if (!context) {
    throw new Error('useDataApp must be used within an DataAppProvider');
  }

  const objItemCard = {} as {
    itemCard: ItemShopCard | undefined;
  };

  if (idProduct) {
    objItemCard.itemCard = context.shoppingCard[0].items.find(
      ({ product }) => product.id === idProduct
    );
  }

  return Object.assign(context, objItemCard);
}
