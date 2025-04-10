import { Country } from '2_entities/Country/model/types/country';
import { Currency } from '2_entities/Currency/model/types/currency';

export interface Profile {
  id?: string;
  first?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}
