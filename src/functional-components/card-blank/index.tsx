import React from 'react';
import { Col } from 'react-bootstrap';
import { DivCardBlank, RowHeader, ColStart } from './styled';
import { CardBlankProps } from './types';

const CardBlank: React.FC<CardBlankProps> = ({
  header,
  children,
  ...rest
}: CardBlankProps) => {
  return (
    <DivCardBlank {...rest}>
      {!!header && (
        <RowHeader notBold={header.notBold} size={header.size}>
          {!!header.start && <ColStart>{header.start}</ColStart>}

          {!!header.children && header.children}

          {!!header.end && (
            <Col xs="auto" className="ml-auto">
              {header.end}
            </Col>
          )}
        </RowHeader>
      )}
      {children}
    </DivCardBlank>
  );
};

export default CardBlank;
