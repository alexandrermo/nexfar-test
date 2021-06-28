import React from 'react';
import { FormHandles } from '@unform/core';
import { Product } from '../../../assets/data/types';
import productsData from '../../../assets/data/products.json';
import CardBlankProduct from '../../../functional-components/card-blank-product';
import Icon from '../../../functional-components/icon';
import Select from '../../../styled-components/select';
import {
  BtnPageArrow,
  BtnPageNumber,
  BtnSearch,
  DivPages,
  DivProducts,
  FormSearch,
  InputSearch,
  LabelFilter,
} from './styled';
import { CardProductsProps } from './types';
import { checkPropsEquals } from '../../../lib/util';
import { ChckFilters } from '../types';
import { useDataApp } from '../../../contexts/data-app';
import { ShoppingCard } from '../../../contexts/data-app/types';

function getProductsFilter(
  { searchText, ordering }: any,
  { commeAction, category, stock }: ChckFilters,
  { items }: ShoppingCard
) {
  const productsFilter = productsData.filter((product) => {
    if (
      searchText &&
      !product.name.toLowerCase().includes(searchText.toLowerCase())
    ) {
      return false;
    }

    if (commeAction) {
      if (commeAction === 'promotion') {
        return false;
      }

      if (commeAction === 'offer' && product.price.discount === 0) {
        return false;
      }
    }

    if (category && product.category !== category) {
      return false;
    }

    if (stock && product.quantityAvailable === 0) {
      return false;
    }

    return true;
  });

  productsFilter.sort((product1, product2) => {
    let [propOrder1, propOrder2]: (string | number)[] = [
      product1.name.toLowerCase(),
      product2.name.toLowerCase(),
    ];

    const [typeOrder, isDesc] = ordering.split('-');

    if (typeOrder === 'value') {
      [propOrder1, propOrder2] = [product1.price.price, product2.price.price];
    } else if (typeOrder === 'stock') {
      [propOrder1, propOrder2] = [
        product1.quantityAvailable,
        product2.quantityAvailable,
      ];
    } else if (typeOrder === 'qnt_card') {
      [propOrder1, propOrder2] = [
        items.find(({ product }) => product.id === product1.id)?.quantity || 0,
        items.find(({ product }) => product.id === product2.id)?.quantity || 0,
      ];
    }

    if (propOrder1 > propOrder2) {
      return isDesc ? -1 : 1;
    }

    return isDesc ? 1 : -1;
  });

  return productsFilter;
}

function getPagesElements(
  totalPages: number,
  idxPage: number,
  setIdxPage: React.Dispatch<React.SetStateAction<number>>
) {
  const pagesElements: JSX.Element[] = [];

  for (let i = 0; i < totalPages; i += 1) {
    pagesElements.push(
      <BtnPageNumber
        onClick={() => {
          setIdxPage(i);
        }}
        active={idxPage === i}
        key={i}
        className={i !== 0 ? 'ml-1' : undefined}
      >
        {i + 1}
      </BtnPageNumber>
    );
  }

  return pagesElements;
}

const CardProducts: React.FC<CardProductsProps> = ({
  chkFilters,
}: CardProductsProps) => {
  let { shoppingCard }: { shoppingCard: ShoppingCard | [ShoppingCard] } =
    useDataApp();

  [shoppingCard] = shoppingCard;

  const [idxPage, setIdxPage] = React.useState(0);

  const [inputsFilter, setInputsFilter] = React.useState({
    searchText: '',
    ordering: 'name',
    exhibition: '3',
  });

  const formRef = React.useRef<FormHandles>(null);

  const onSubmitSearch = React.useCallback(
    (data) => {
      if (!checkPropsEquals(data, inputsFilter)) {
        setInputsFilter(data);
        setIdxPage(0);
      }
    },
    [setInputsFilter, setIdxPage, inputsFilter, checkPropsEquals]
  );

  const onChangeFilter = React.useCallback(
    (event) => {
      const { name, value } = event.currentTarget;
      setInputsFilter((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    [setInputsFilter]
  );

  const nextPage = React.useCallback(() => {
    setIdxPage((prev) => prev + 1);
  }, [setIdxPage]);

  const previousPage = React.useCallback(() => {
    setIdxPage((prev) => prev - 1);
  }, [setIdxPage]);

  const productsFilter = React.useMemo(
    () =>
      getProductsFilter(inputsFilter, chkFilters, shoppingCard as ShoppingCard),
    [inputsFilter, chkFilters, shoppingCard]
  );

  const exhibition = parseInt(inputsFilter.exhibition, 10);

  const totalPages = Math.ceil(productsFilter.length / exhibition);

  const productsShow = productsFilter.slice(
    idxPage * exhibition,
    idxPage * exhibition + exhibition
  );

  React.useEffect(() => {
    setIdxPage(0);
  }, [chkFilters]);

  const divPages =
    totalPages === 0 ? (
      <></>
    ) : (
      <DivPages className="my-4">
        <BtnPageArrow disabled={idxPage === 0} onClick={previousPage}>
          <Icon name="arrow_back_ios" />
        </BtnPageArrow>

        {getPagesElements(totalPages, idxPage, setIdxPage)}

        <BtnPageArrow disabled={idxPage === totalPages - 1} onClick={nextPage}>
          <Icon name="arrow_forward_ios" />
        </BtnPageArrow>
      </DivPages>
    );

  return (
    <DivProducts>
      <FormSearch onSubmit={onSubmitSearch} ref={formRef}>
        <BtnSearch type="submit">
          <Icon name="search" size="1.5rem" color="white" />
        </BtnSearch>
        <InputSearch name="searchText" placeholder="Pesquisar" />

        <LabelFilter>
          <span className="mr-3">Ordenar por:</span>
          <Select
            name="ordering"
            onChange={onChangeFilter}
            options={[
              { value: 'name', label: 'Nome (A - Z)' },
              { value: 'name-desc', label: 'Nome (Z - A)' },
              { value: 'value', label: 'Valor ' },
              { value: 'value-desc', label: 'Valor 	' },
              { value: 'stock', label: 'Estoque ' },
              { value: 'stock-desc', label: 'Estoque ' },
              { value: 'qnt_card', label: 'Qnt Carrinho ' },
              { value: 'qnt_card-desc', label: 'Qnt Carrinho ' },
            ]}
          />
        </LabelFilter>

        <LabelFilter className="ml-4">
          <span className="mr-3">Exibição:</span>
          <Select
            name="exhibition"
            onChange={onChangeFilter}
            options={[
              { value: '3', label: '3' },
              { value: '5', label: '5' },
              { value: '7', label: '7' },
              { value: '10', label: '10' },
              { value: '15', label: '15' },
              { value: '20', label: '20' },
            ]}
          />
        </LabelFilter>
      </FormSearch>

      {divPages}

      {productsShow.map((product: Product, idx) => (
        <CardBlankProduct
          className={`${idx === 0 ? '' : 'mt-3'}`}
          product={product}
          key={product.id}
        />
      ))}

      {divPages}
    </DivProducts>
  );
};

export default CardProducts;
