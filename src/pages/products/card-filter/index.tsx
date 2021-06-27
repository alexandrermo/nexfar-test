import { Form } from '@unform/web';
import React from 'react';
import InputCheckbox from '../../../functional-components/input-checkbox';
import { DivFilter, DivHeader, SpanHeader } from './styled';
import { CardFilterProps } from './types';

const arrayGroupChck = [
  {
    header: 'AÇÕES COMERCIAIS',
    items: [
      { label: 'EM PROMOÇÃO', name: 'promotion' },
      { label: 'EM OFERTA', name: 'offer' },
    ],
  },
  {
    header: 'ESTOQUE',
    items: [{ label: 'ESTOQUE DISPONÍVEL', name: 'stock' }],
  },
  {
    header: 'CATEGORIAS',
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
  setChkFilters,
}: CardFilterProps) => {
  const onChangeChk = React.useCallback<
    React.ChangeEventHandler<HTMLInputElement>
  >(
    (event) => {
      const { name } = event.currentTarget;
      if (event.currentTarget.checked) {
        setChkFilters((prev) => {
          const newSet = new Set(prev);
          newSet.add(name);
          return newSet;
        });
      } else {
        setChkFilters((prev) => {
          const newSet = new Set(prev);
          newSet.delete(name);
          return newSet;
        });
      }
    },
    [setChkFilters]
  );

  return (
    <DivFilter className="pt-3">
      <Form onSubmit={() => {}}>
        {arrayGroupChck.map(({ header, items }) => (
          <DivHeader key={header} className="mt-4">
            <SpanHeader>{header}</SpanHeader>
            {items.map(({ label, name }, idxItem) => (
              <InputCheckbox
                className={idxItem === 0 ? 'mt-3' : 'mt-1'}
                key={`${header}-${name}`}
                label={label || name}
                name={`${header === 'CATEGORIAS' ? 'category-' : ''}${name}`}
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
