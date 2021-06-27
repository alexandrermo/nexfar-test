import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React from 'react';
import { Row } from 'react-bootstrap';
import { Product } from '../../../assets/data/types';
import productsData from '../../../assets/data/products.json';
import CardBlankProduct from '../../../functional-components/card-blank-product';
import Icon from '../../../functional-components/icon';
import Select from '../../../styled-components/select';
import {
  BtnSearch,
  DivProducts,
  FormSearch,
  InputSearch,
  LabelFilter,
} from './styled';
import { CardProductsProps } from './types';

const CardProducts: React.FC<CardProductsProps> = ({
  chkFilters,
}: CardProductsProps) => {
  const onSubmitSearch = React.useCallback((data) => {}, []);

  return (
    <DivProducts>
      <FormSearch onSubmit={onSubmitSearch}>
        <BtnSearch type="submit">
          <Icon name="search" size="1.5rem" color="white" />
        </BtnSearch>
        <InputSearch name="search-text" placeholder="Pesquisar" />

        <LabelFilter>
          <span className="mr-3">Ordenar por:</span>
          <Select
            name="ordering"
            options={[
              { value: 'name', label: 'Nome (A - Z)' },
              { value: 'name-desc', label: 'Nome (Z - A)' },
              { value: 'value', label: 'Valor ' },
              { value: 'value-desc', label: 'Valor 	' },
              { value: 'stock', label: 'Estoque ' },
              { value: 'stock-desc', label: 'Estoque ' },
            ]}
          />
        </LabelFilter>

        <LabelFilter className="ml-4">
          <span className="mr-3">Exibição:</span>
          <Select
            name="ordering"
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

      {productsData.map((product: Product, idx) => (
        <CardBlankProduct
          className={`${idx === 0 ? 'mt-4' : 'mt-3'}`}
          product={product}
          key={product.id}
        />
      ))}
    </DivProducts>
  );
};

export default CardProducts;
