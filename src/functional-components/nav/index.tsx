import React from 'react';
import { useDataApp } from '../../contexts/data-app';
import { formatCnpj } from '../../lib/util';
import Icon from '../icon';
import {
  DivCliData,
  DivClient,
  DivItem,
  DivItems,
  IconNav,
  NavLinkStyl,
  NavStyl,
  SpanNavHeader,
} from './styled';

const objectNav = [
  {
    header: 'COMPRAS',
    items: [
      {
        name: 'Promoções',
        icon: 'local_fire_department',
      },
      {
        name: 'Produtos',
        icon: 'box',
        href: 'products',
      },
      {
        name: 'Pedidos',
        icon: 'document-list',
      },
      {
        name: 'Cupons',
        icon: 'ticket',
      },
    ],
  },
  {
    header: 'ADMINISTRATIVO',
    items: [
      {
        name: 'Estabelecimentos',
        icon: 'shop',
      },
    ],
  },
  {
    header: 'AJUDA',
    items: [
      {
        name: 'Whatsapp',
        icon: 'whatsapp',
      },
      {
        name: 'Contato Distribuidora',
        icon: 'phone',
      },
    ],
  },
];

const Nav: React.FC = () => {
  const { client } = useDataApp();

  return (
    <NavStyl>
      <DivClient className="mt-4">
        <Icon name="shop" size="2rem" className="mr-3" />
        <DivCliData className="mr-3">
          <SpanNavHeader>{client.name}</SpanNavHeader>
          <span className="mt-2">{formatCnpj(client.cnpj)}</span>
        </DivCliData>
        <SpanNavHeader className="mr-2">
          <Icon name="arrow_forward_ios" />
        </SpanNavHeader>
      </DivClient>
      {objectNav.map(({ header, items }, idxNav) => (
        <div className={`mt-${idxNav === 0 ? 4 : 5}`} key={header}>
          <SpanNavHeader>{header}</SpanNavHeader>
          <DivItems>
            {items.map(({ name, icon, href }) => {
              let renderHtml = (
                <>
                  <IconNav className="ml-3" name={icon} />
                  <span className="ml-3">{name}</span>
                </>
              );

              if (href) {
                renderHtml = (
                  <NavLinkStyl
                    activeStyle={{
                      color: '#3cba92',
                      cursor: 'default',
                      backgroundColor: 'rgb(245, 245, 255)',
                      fontWeight: 'bold',
                    }}
                    to={href}
                  >
                    {renderHtml}
                  </NavLinkStyl>
                );
              }

              return (
                <DivItem className="mt-3" key={name}>
                  {renderHtml}
                </DivItem>
              );
            })}
          </DivItems>
        </div>
      ))}
    </NavStyl>
  );
};

export default Nav;
