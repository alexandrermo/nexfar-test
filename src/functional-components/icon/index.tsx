import React from 'react';
import { IconStyl } from './styled';
import { IconProps } from './types';

const Icon: React.FC<IconProps> = ({ name, className, ...rest }: IconProps) => {
  return (
    <IconStyl
      className={`icon-${name}${className ? ` ${className}` : ''}`}
      {...rest}
    />
  );
};

export default Icon;
