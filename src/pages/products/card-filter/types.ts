import { ChckFilters } from '../types';

export interface CardFilterProps {
  chkFilters: ChckFilters;
  setChkFilters: React.Dispatch<React.SetStateAction<ChckFilters>>;
}
