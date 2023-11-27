import { Handler } from 'aws-lambda';

export const handler: Handler = async (event) => {
  if ('a' in event && typeof event['a'] == 'number'
  && 'b' in event && typeof event['b'] == 'number') {
    return event['a'] - event['b'];
  } else {
    throw new Error('event doesn\'t satisfy the type { a: number, b: number }');
  }
};
