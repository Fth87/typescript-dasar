describe('Array', () => {
  it('should same with javascript', () => {
    const names: string[] = ['Fatih', 'Eko'];
    const values: number[] = [1, 2, 3, 4];

    console.info(names);
    console.info(values);
  });

  it('Should support readonly array', () => {
    const hobbies: ReadonlyArray<string> = ['membaca', 'menulis'];
  
    console.info(hobbies);
  });
});
