import React from 'react';
import CardFilter from './card-filter';
import CardProducts from './card-products';
import { ColFilter, ColProducts, RowProducts } from './styled';
import { ChckFilters } from './types';

const Products: React.FC = () => {
  const [chkFilters, setChkFilters] = React.useState<ChckFilters>(
    {} as ChckFilters
  );

  return (
    <RowProducts>
      <ColProducts xs={9}>
        <CardProducts chkFilters={chkFilters} />
      </ColProducts>
      <ColFilter xs={3}>
        <CardFilter chkFilters={chkFilters} setChkFilters={setChkFilters} />
      </ColFilter>
    </RowProducts>
  );
};

export default Products;
