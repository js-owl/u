import { Country } from '@/2_entities/Country';
import { Currency } from '@/2_entities/Currency';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileShema } from '../types/editableProfileCardSchema';
import { ValidateProfileError } from '../consts/consts';
import { profileActions, profileReducer } from './profileSlice';

const data = {
  username: 'admin',
  age: 22,
  country: Country.Belarus,
  lastname: 'ulbi tv',
  first: 'asd',
  city: 'asf',
  currency: Currency.USD
};

describe('profileSlice.test', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileShema> = { readonly: false };
    expect(profileReducer(state as ProfileShema, profileActions.setReadonly(true))).toEqual({ readonly: true });
  });

  test('test cancel edit', () => {
    const state: DeepPartial<ProfileShema> = { data, form: { username: '' } };

    expect(profileReducer(state as ProfileShema, profileActions.cancelEdit())).toEqual({
      readonly: true,
      validateErrors: undefined,
      data,
      form: data
    });
  });

  test('test update profile', () => {
    const state: DeepPartial<ProfileShema> = { form: { username: '123' } };

    expect(
      profileReducer(
        state as ProfileShema,
        profileActions.updateProfileData({
          username: '123456'
        })
      )
    ).toEqual({
      form: { username: '123456' }
    });
  });

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileShema> = {
      isLoading: false,
      validateError: [ValidateProfileError.SERVER_ERROR]
    };

    expect(profileReducer(state as ProfileShema, updateProfileData.pending)).toEqual({
      isLoading: true,
      validateErrors: undefined
    });
  });

  test('test update profile service fullfiled', () => {
    const state: DeepPartial<ProfileShema> = {
      isLoading: true
    };

    expect(profileReducer(state as ProfileShema, updateProfileData.fulfilled(data, ''))).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      validateError: undefined,
      form: data,
      data
    });
  });
});
