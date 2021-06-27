import { Form } from '@unform/web';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { CardBlank } from '../../styled-components/card-blank';
import Icon from '../icon';
import Tooltip from '../tooltip';
import {
  BtnIconQnt,
  BtnWarnMe,
  ColBody,
  ColImg,
  ColInfo,
  ColTrash,
  ImgProduct,
  InputQnt,
  LiTooltip,
  RowHeader,
  RowInfo,
  RowInfoValues,
  SpanHeaderInfo,
  SpanName,
  SpanPrice,
  SpanSku,
  SpanWithoutSt,
} from './styled';
import { CardBlankProductProps } from './types';

const CardBlankProduct: React.FC<CardBlankProductProps> = ({
  product,
  ...rest
}: CardBlankProductProps) => {
  const [quantity, setQuantity] = React.useState(0);
  const intervalQntRef = React.useRef<NodeJS.Timeout>();

  const stopInterval = React.useCallback(() => {
    if (intervalQntRef.current) {
      clearInterval(intervalQntRef.current);
    }
  }, []);

  const startRemove = React.useCallback(() => {
    setQuantity((prev) => {
      return prev - 1;
    });

    intervalQntRef.current = setInterval(() => {
      setQuantity((prev) => {
        if (prev - 1 < 0) {
          stopInterval();
          return 0;
        }

        return prev - 1;
      });
    }, 200);
  }, [setQuantity]);

  const startAdd = React.useCallback(() => {
    setQuantity((prev) => prev + 1);

    intervalQntRef.current = setInterval(() => {
      setQuantity((prev) => {
        if (prev + 1 > product.quantityAvailable) {
          stopInterval();
          return product.quantityAvailable;
        }

        return prev + 1;
      });
    }, 200);
  }, [setQuantity]);

  const onMousedownRemove = React.useCallback(() => {
    startRemove();
  }, [setQuantity]);

  const onMousedownAdd = React.useCallback(() => {
    startAdd();
  }, [setQuantity]);

  const onChangeIptQnt = React.useCallback(
    (event) => {
      const inputQnt = event.currentTarget;
      let vlJustNmb = inputQnt.value.replace(/[^\d]/g, '');

      if (!vlJustNmb) {
        setQuantity(0);
      } else {
        vlJustNmb = parseInt(vlJustNmb, 10);

        if (vlJustNmb > product.quantityAvailable) {
          setQuantity(product.quantityAvailable);
        } else {
          setQuantity(vlJustNmb);
        }
      }
    },
    [setQuantity, product.quantityAvailable]
  );

  const inputDisabled = !product.quantityAvailable;

  const btnRemoveDis = inputDisabled || quantity === 0;
  const btnAddDis = inputDisabled || quantity === product.quantityAvailable;

  return (
    <CardBlank {...rest}>
      <RowHeader>
        <Col xs="auto">
          <SpanSku>{product.sku}</SpanSku>
        </Col>
        <Col xs="auto">
          <SpanName>{product.name}</SpanName>
        </Col>
        <Col xs="auto" className="ml-auto">
          <Tooltip text={product.barcode}>
            <Icon name="barcode" />
          </Tooltip>
        </Col>
        <Col xs="auto">
          <Tooltip
            minWidth="200px"
            text={
              <ul>
                <LiTooltip>Princípio: {product.principle}</LiTooltip>
                <LiTooltip>
                  Impostos: R${' '}
                  {product.price.taxes.toFixed(2).replace('.', ',')}
                </LiTooltip>
              </ul>
            }
          >
            <Icon name="information-outline" />
          </Tooltip>
        </Col>
      </RowHeader>

      <Row>
        <ColImg xs={3}>
          <ImgProduct className="my-4" src={product.imageURL} />
        </ColImg>
        <ColBody className="pl-0">
          <RowInfo className="mt-4 ml-3">
            <Col className="pl-0">
              <Row>
                <Col>
                  <SpanHeaderInfo>Base</SpanHeaderInfo>
                </Col>
                <Col>
                  <SpanHeaderInfo>Estoque</SpanHeaderInfo>
                </Col>
                <Col>
                  <SpanHeaderInfo>Qutantidade (un)</SpanHeaderInfo>
                </Col>
                <Col>
                  <SpanHeaderInfo>Valor</SpanHeaderInfo>
                </Col>
              </Row>
              <RowInfoValues className="mt-4">
                <ColInfo>
                  <span>{product.base}</span>
                  <SpanPrice>
                    R$ {product.price.price.toFixed(2).replace('.', ',')}
                  </SpanPrice>
                </ColInfo>

                <ColInfo flexStart={!product.quantityAvailable}>
                  {product.quantityAvailable ? (
                    <span>{`${product.quantityAvailable} un`}</span>
                  ) : (
                    <>
                      <SpanWithoutSt>Sem estoque</SpanWithoutSt>
                      <BtnWarnMe>Avise-me</BtnWarnMe>
                    </>
                  )}
                </ColInfo>
                <ColInfo quantity flexStart>
                  <BtnIconQnt
                    type="button"
                    typeIcon="remove"
                    disabled={btnRemoveDis}
                    onMouseDown={onMousedownRemove}
                    onMouseUp={stopInterval}
                    onMouseLeave={stopInterval}
                  >
                    <Icon
                      name="remove_circle_outline"
                      size="1.5rem"
                      color={btnRemoveDis ? '#bfbfbf' : '#f62854'}
                    />
                  </BtnIconQnt>

                  <InputQnt
                    onChange={onChangeIptQnt}
                    disabled={inputDisabled}
                    value={quantity}
                  />

                  <span>un</span>

                  <BtnIconQnt
                    type="button"
                    typeIcon="add"
                    disabled={btnAddDis}
                    onMouseDown={onMousedownAdd}
                    onMouseUp={stopInterval}
                    onMouseLeave={stopInterval}
                  >
                    <Icon
                      name="add-outline"
                      size="1.3rem"
                      color={btnAddDis ? '#bfbfbf' : '#3cba92'}
                    />
                  </BtnIconQnt>
                </ColInfo>
                <ColInfo>
                  <SpanPrice>
                    R${' '}
                    {(product.price.price * quantity)
                      .toFixed(2)
                      .replace('.', ',')}
                  </SpanPrice>
                </ColInfo>
              </RowInfoValues>
            </Col>
            <ColTrash xs="auto">
              <Icon name="trash" color="#f62854" />
            </ColTrash>
          </RowInfo>
        </ColBody>
      </Row>
    </CardBlank>
  );
};

export default CardBlankProduct;
