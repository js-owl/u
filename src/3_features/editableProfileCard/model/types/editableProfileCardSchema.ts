import { Profile } from '@/2_entities/Profile';
import { ValidateProfileError } from '../consts/consts';

export interface ProfileShema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateError?: ValidateProfileError[];
}
