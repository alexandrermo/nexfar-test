import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React from 'react';
import InputCheckbox from '../../../functional-components/input-checkbox';
import { DivFilter, DivHeader, SpanHeader } from './styled';
import { CardFilterProps } from './types';

const arrayGroupChck = [
  {
    header: 'AÇÕES COMERCIAIS',
    type: 'commeAction',
    items: [
      { label: 'EM PROMOÇÃO', name: 'promotion' },
      { label: 'EM OFERTA', name: 'offer' },
    ],
  },
  {
    header: 'ESTOQUE',
    type: 'stock',
    items: [{ label: 'ESTOQUE DISPONÍVEL', name: 'stock' }],
  },
  {
    header: 'CATEGORIAS',
    type: 'category',
    items: [
      { name: 'GENÉRICOS' },
      { name: 'SIMILARES' },
      { name: 'PSICOTRÓPICOS' },
      { name: 'COSMÉTICOS', label: 'HIGIENE E BELEZA' },
      { name: 'ALIMENTOS E SUPLEMENTOS' },
    ],
  },
];

const CardFilter: React.FC<CardFilterProps> = ({
  chkFilters,
  setChkFilters,
}: CardFilterProps) => {
  const formRef = React.useRef<FormHandles>(null);

  const onChangeChk = React.useCallback<
    React.ChangeEventHandler<HTMLInputElement>
  >(
    (event) => {
      const { name } = event.currentTarget;
      const [type, value] = name.split('-');

      if (event.currentTarget.checked) {
        if (chkFilters[type]) {
          formRef.current?.setFieldValue(`${type}-${chkFilters[type]}`, false);
        }

        setChkFilters((prev) => {
          return { ...prev, [type]: value };
        });
      } else {
        setChkFilters((prev) => {
          return { ...prev, [type]: undefined };
        });
      }
    },
    [setChkFilters, chkFilters]
  );

  return (
    <DivFilter className="pt-3">
      <Form onSubmit={() => {}} ref={formRef}>
        {arrayGroupChck.map(({ header, items, type }) => (
          <DivHeader key={header} className="mt-4">
            <SpanHeader>{header}</SpanHeader>
            {items.map(({ label, name }, idxItem) => (
              <InputCheckbox
                className={idxItem === 0 ? 'mt-3' : 'mt-1'}
                key={`${header}-${name}`}
                label={label || name}
                name={`${type}-${name}`}
                onChange={onChangeChk}
              />
            ))}
          </DivHeader>
        ))}
      </Form>
    </DivFilter>
  );
};

export default CardFilter;
