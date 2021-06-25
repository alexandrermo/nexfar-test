import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDataApp } from '../../contexts/data-app';
import { HeaderStyl, ColRight, DivCart } from './styled';
import imgLogo from '../../assets/Nexfar.png';
import Icon from '../../components/icon';

const Header: React.FC = () => {
  const { shoppingCard } = useDataApp();

  return (
    <HeaderStyl>
      <Row>
        <Col xs="auto">
          <img src={imgLogo} />
        </Col>

        <ColRight xs="auto">
          <span>NEXFAR</span>
          <DivCart>
            <Icon name="shopping-cart" />
            <span>R$ {shoppingCard.netTotal}</span>
          </DivCart>
          <span>Pedido mínimo: R$ 150,00</span>
        </ColRight>
        <Col xs={1} />
        <Col xs="auto">
          <Icon name="notifications_none" cursor="pointer" />
        </Col>
        <Col xs="auto">
          <span>U</span>
        </Col>
      </Row>
    </HeaderStyl>
  );
};

export default Header;
