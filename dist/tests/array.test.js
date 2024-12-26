"use strict";
describe('Array', () => {
    it('should same with javascript', () => {
        const names = ['Fatih', 'Eko'];
        const values = [1, 2, 3, 4];
        console.info(names);
        console.info(values);
    });
    it('Should support readonly array', () => {
        const hobbies = ['membaca', 'menulis'];
        console.info(hobbies);
    });
});
