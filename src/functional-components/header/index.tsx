import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDataApp } from '../../contexts/data-app';
import {
  HeaderStyl,
  ColRight,
  DivCart,
  DivU,
  LinkCart,
  IconNoti,
} from './styled';
import imgLogo from '../../assets/images/Nexfar.png';
import Icon from '../icon';
import { formatNbMoney } from '../../lib/util';

const Header: React.FC = () => {
  const { shoppingCard } = useDataApp();

  return (
    <HeaderStyl className="container container-custom pb-1">
      <Row className="justify-content-center">
        <Col xs="auto" className="d-flex align-items-center ml-5">
          <img src={imgLogo} height="35" alt="imagem produto" />
        </Col>

        <ColRight xs="auto" className="mr-3">
          <LinkCart to="/shopping-cart">
            <span>NEXFAR</span>
            <DivCart>
              <Icon name="shopping-cart" className="mr-1" />
              <span style={{ fontWeight: 'bold' }}>
                R$ {formatNbMoney(shoppingCard[0].netTotal)}
              </span>
            </DivCart>
            <span style={{ fontSize: '0.7rem' }}>Pedido mínimo: R$ 150,00</span>
          </LinkCart>
        </ColRight>

        <Col xs="auto" className="d-flex align-items-center">
          <IconNoti name="notifications_none" cursor="pointer" size="2.2rem" />
        </Col>
        <Col xs="auto" className="d-flex align-items-center">
          <DivU>U</DivU>
        </Col>
      </Row>
    </HeaderStyl>
  );
};

export default Header;
