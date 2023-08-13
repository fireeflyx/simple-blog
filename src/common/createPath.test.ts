import createPath, { __dirname } from './createPath';
import { dirname, resolve } from 'path';

describe('create path test', () => {
  test('error file', (): void => {
    const result = createPath('error');
    const testValue = resolve(__dirname, '..', 'views', 'error');

    expect(result).toBe(testValue);
  });
});
