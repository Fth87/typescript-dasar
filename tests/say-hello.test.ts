import { sayHello } from '../src/say-hello';

describe('sayHello', (): void => {
  it('Should return Hallo Fatih', () => {
    expect(sayHello('Fatih')).toBe('Hello Fatih');
  });
});
