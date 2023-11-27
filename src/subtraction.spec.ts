import { Callback, Context } from 'aws-lambda';
import { handler } from './subtraction';

describe('subtraction', () => {
  describe('handler', () => {
    test('2 take away 3 returns -1', async () => {
      await expect(handler({a: 2, b: 3}, {} as Context, {} as Callback)).resolves.toEqual(-1);
    });

    test('invalid event structure', async () => {
      await expect(handler({a: 2}, {} as Context, {} as Callback)).rejects.toThrow();
    });

    test('invalid data types', async () => {
      await expect(handler({a: 'x', b: 'y'}, {} as Context, {} as Callback)).rejects.toThrow();
    });
  });
});
