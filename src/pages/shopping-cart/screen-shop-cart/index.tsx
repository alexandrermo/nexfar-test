import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDataApp } from '../../../contexts/data-app';
import Icon from '../../../functional-components/icon';
import { NexButton } from '../../../styled-components/nex-button';
import {
  ContainerScreen,
  FirColScreen,
  RowScreen,
} from '../../../styled-components/container-screen';
import {
  BtnSubLink,
  ColFlexCol,
  LinkBack,
  RowRem,
  SpanBold,
  SpanFootProd,
  SpanIdCli,
} from './styled';
import CardBlank from '../../../functional-components/card-blank';
import { ShoppingCard } from '../../../contexts/data-app/types';
import { formatCnpj, formatNbMoney } from '../../../lib/util';
// arrow-left

const ScreenShopCart: React.FC = () => {
  let {
    shoppingCard,
    // eslint-disable-next-line prefer-const
    dispatchShoppingCard,
  }: {
    shoppingCard: ShoppingCard | [ShoppingCard];
    dispatchShoppingCard: any;
  } = useDataApp();

  [shoppingCard] = shoppingCard;

  return (
    <ContainerScreen>
      <RowRem>
        <Col xs="auto" className="d-flex align-items-center">
          <LinkBack to="/products">
            <Icon name="arrow-left" />
            <span className="ml-2">Voltar</span>
          </LinkBack>
        </Col>

        <Col xs="auto" className="d-flex align-items-center ml-auto">
          <NexButton
            size="1rem"
            theme="nex"
            circular
            className="d-flex align-items-center"
            onClick={() => {
              console.log(JSON.stringify([shoppingCard], null, 2));
              console.log(shoppingCard);
            }}
          >
            IR PARA PAGAMENTO <Icon name="arrow-right" className="ml-2" />
          </NexButton>
        </Col>

        <Col xs="auto" className="d-flex align-items-center">
          <NexButton
            size="1rem"
            colorStyl="#f62854"
            className="d-flex align-items-center"
            onClick={() => {
              dispatchShoppingCard({ type: 'clear' });
            }}
          >
            LIMPAR CARRINHO <Icon name="trash" size="1.5rem" className="ml-2" />
          </NexButton>
        </Col>
      </RowRem>

      <RowRem className="mt-4">
        <FirColScreen xs="auto">
          <BtnSubLink active>RESUMO</BtnSubLink>
        </FirColScreen>
        <Col xs="auto">
          <BtnSubLink>PRODUTOS</BtnSubLink>
        </Col>
        <Col xs="auto">
          <BtnSubLink>INFORMAÇÕES ADICIONAIS</BtnSubLink>
        </Col>
      </RowRem>

      <RowScreen className="mt-4">
        <FirColScreen xs={8}>
          <CardBlank header={{ start: 'PRODUTOS' }}>
            {shoppingCard.items.map(
              ({ product, quantity, originalPrice }, idx) => {
                const { price, discount, taxes } = originalPrice;
                const priceWithoutTx = quantity * price - discount;
                const priceWithTx = priceWithoutTx + taxes;

                return (
                  <Row
                    key={product.id}
                    className={`${idx === 0 ? '' : 'mt-3'}`}
                  >
                    <Col xs="7" className="d-flex align-items-center">
                      {product.name}
                    </Col>
                    <ColFlexCol
                      xs="auto"
                      className="d-flex align-items-end ml-auto"
                    >
                      <span>
                        {quantity} un - R$ {formatNbMoney(priceWithoutTx)}
                      </span>
                      <SpanFootProd>
                        Impostos: R$ {formatNbMoney(taxes)} Total: R${' '}
                        {formatNbMoney(priceWithTx)}
                      </SpanFootProd>
                    </ColFlexCol>
                  </Row>
                );
              }
            )}
          </CardBlank>
          <CardBlank
            className="mt-3"
            header={{
              start: 'CLIENTE',
              end: <NexButton colorStyl="#3cba92">VER DETALHES</NexButton>,
            }}
          >
            <Row>
              <ColFlexCol xs="auto" className="d-flex">
                <span>ID</span>
                <SpanIdCli>{shoppingCard.client.externalClientId}</SpanIdCli>
              </ColFlexCol>
            </Row>

            <Row className="mt-3">
              <ColFlexCol xs={6} className="d-flex">
                <span>Razão Social</span>
                <SpanBold>{shoppingCard.client.razaoSocial}</SpanBold>
              </ColFlexCol>
              <ColFlexCol className="d-flex">
                <span>CNPJ</span>
                <SpanBold>{formatCnpj(shoppingCard.client.cnpj)}</SpanBold>
              </ColFlexCol>
            </Row>
          </CardBlank>
        </FirColScreen>
        <Col xs={4}>
          <CardBlank header={{ start: 'VALORES' }}>
            <Row className="pr-4">
              <ColFlexCol xs="auto" className="d-flex align-items-center">
                <span>Total</span>
                <span>(sem impostos)</span>
                <SpanBold>R$ {formatNbMoney(shoppingCard.netTotal)}</SpanBold>
              </ColFlexCol>
              <ColFlexCol
                xs="auto"
                className="d-flex justify-content-center align-items-center ml-auto"
              >
                <span>Impostos</span>
                <SpanBold>
                  R${' '}
                  {formatNbMoney(
                    shoppingCard.totalWithTaxes - shoppingCard.netTotal
                  )}
                </SpanBold>
              </ColFlexCol>
            </Row>

            <Row className="justify-content-center mt-3">
              <ColFlexCol
                size="1.2rem"
                xs="auto"
                className="d-flex align-items-center"
              >
                <span>Total:</span>
                <SpanBold>
                  R$ {formatNbMoney(shoppingCard.totalWithTaxes)}
                </SpanBold>
              </ColFlexCol>
            </Row>
          </CardBlank>
        </Col>
      </RowScreen>
    </ContainerScreen>
  );
};

export default ScreenShopCart;
