import React from 'react';
import { IconStyl } from './styled';
import { IconProps } from './types';

const Icon: React.FC<IconProps> = ({ name, ...rest }: IconProps) => {
  return <IconStyl className={`icon-${name}`} {...rest} />;
};

export default Icon;
