import { Callback, Context } from 'aws-lambda';
import { handler } from './addition';

describe('addition', () => {
  describe('handler', () => {
    test('2 and 3 adds up to 5', async () => {
      await expect(handler({a: 2, b: 3}, {} as Context, {} as Callback)).resolves.toEqual(5);
    });

    test('invalid event structure', async () => {
      await expect(handler({a: 2}, {} as Context, {} as Callback)).rejects.toThrow();
    });

    test('invalid data types', async () => {
      await expect(handler({a: 'x', b: 'y'}, {} as Context, {} as Callback)).rejects.toThrow();
    });
  });
});
