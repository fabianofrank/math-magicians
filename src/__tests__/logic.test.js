import calculate from '../logic/calculate';

describe('Calculate test:', () => {
  let obj = { total: 0, next: null, operation: null };
  let buttonName = null;

  describe('When button AC pressed', () => {
    it('Expects to null obj', () => {
      obj = { total: '1', next: '0', operation: '*' };
      buttonName = 'AC';
      const result = calculate(obj, buttonName);
      expect(result).toEqual(
        { total: null, next: null, operation: null },
      );
    });
  });
  
  describe('When number multiplied by 0:', () => {
    it('Expects to null obj', () => {
      obj = { total: '1', next: '0', operation: '*' };
      buttonName = '0';
      const result = calculate(obj, buttonName);
      expect(result).toEqual(
        { total: '1', next: '0', operation: '*' },
      );
    });
  });

  describe('Button === .', () => {
    test('Obj next = 1.2, Button = .', () => {
      expect(calculate({ total: '1', next: '1.2', operation: null }, '.')).toEqual(
        { total: '1', next: '1.2', operation: null },
      );
    });
  });

  describe('Button === =', () => {
    test('Obj operation, total = 1, next = 2, Button = =', () => {
      expect(calculate({ total: '1', next: '2', operation: '+' }, '=')).toEqual(
        { total: '3', next: null, operation: null },
      );
    });
  });

  describe('Button === +/-', () => {
    test('Obj next = 2, Button = +/-', () => {
      expect(
        calculate({ total: '1', next: '2', operation: '+' }, '+/-'),
      ).toEqual(
        { total: '1', next: '-2', operation: '+' },
      );
    });
  });

  describe('Button is operation', () => {
    test('Obj operation and next = null, total = 1, Button = +', () => {
      expect(
        calculate({ total: '1', next: null, operation: null }, '+'),
      ).toEqual(
        { total: '1', next: null, operation: '+' },
      );
    });
  });
});
