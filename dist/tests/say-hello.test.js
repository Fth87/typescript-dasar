import { sayHello } from '../src/say-hello';
describe('sayHello', () => {
    it('Should return Hallo Fatih', () => {
        expect(sayHello('Fatih')).toBe('Hello Fatih');
    });
});
