import { StateSchema } from '@/7_app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginIsLoading', () => {
  test('toEqual 123', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: '123'
      }
    };
    expect(getLoginPassword(state as StateSchema)).toEqual('123');
  });
  test('toEqual empty string', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
