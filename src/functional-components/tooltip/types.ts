import React from 'react';

export interface DivTooltipTextProps {
  minWidth?: string;
}

export interface TooltipProps extends DivTooltipTextProps {
  text: React.ReactNode;
}
