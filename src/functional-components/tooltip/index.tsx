import React from 'react';
import { DivTooltip, DivTooltipText } from './styled';
import { TooltipProps } from './types';

const Tooltip: React.FC<React.PropsWithChildren<TooltipProps>> = ({
  children,
  text,
  ...rest
}: React.PropsWithChildren<TooltipProps>) => {
  return (
    <DivTooltip>
      {children}
      <DivTooltipText {...rest}>{text}</DivTooltipText>
    </DivTooltip>
  );
};

export default Tooltip;
