import doubleNumbers from './doubleNumbers';

describe('Double number', () => {
  it('should double the numbers list', () => {
    const data = doubleNumbers([3, 4, 5, 6]);
    const expectedValue = '6,8,10,12';
    expect(data).toBe(expectedValue);
  });

  it('should return empty string if no param', () => {
    const data = doubleNumbers();
    const expectedValue = '';
    expect(data).toBe(expectedValue);
  })
});
