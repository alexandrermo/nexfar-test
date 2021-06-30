import React, { HTMLAttributes } from 'react';

interface Header extends RowHeaderProps {
  start?: React.ReactNode;
  children?: React.ReactNode;
  end?: React.ReactNode;
}

export interface CardBlankProps extends HTMLAttributes<HTMLDivElement> {
  header?: Header;
  children?: React.ReactNode;
}

export interface RowHeaderProps extends HTMLAttributes<HTMLDivElement> {
  notBold?: boolean;
  size?: string;
}
