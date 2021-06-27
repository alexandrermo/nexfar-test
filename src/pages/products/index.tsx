import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CardFilter from './card-filter';
import CardProducts from './card-products';
import { ColFilter, ColProducts, RowProducts } from './styled';

const Products: React.FC = () => {
  const [chkFilters, setChkFilters] = React.useState(() => new Set<string>());

  return (
    <RowProducts>
      <ColProducts xs={9}>
        <CardProducts chkFilters={chkFilters} />
      </ColProducts>
      <ColFilter xs={3}>
        <CardFilter setChkFilters={setChkFilters} />
      </ColFilter>
    </RowProducts>
  );
};

export default Products;
