import calculate from '../logic/calculate';

describe('Calculate test:', () => {
  test('Expects button AC to null obj', () => {
    expect(calculate({ total: '1', next: '0', operation: '*' }, 'AC')).toEqual(
      { total: null, next: null, operation: null },
    );
  });

  describe('Next test', () => {
    test('Expects next to be equal to button', () => {
      expect(calculate({ total: '1', next: '0', operation: '*' }, '0')).toEqual(
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
