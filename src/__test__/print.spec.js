const Print = require('../print.js')

describe('Print', () => {

  test('Should print the statement to the console', () => {
    let printer = new Print();
    const mockPrint = jest.spyOn(printer, 'printStatement');

    let test1 = "12/08/2020 || 2000.00 || || 2000.00 "
    let test2 = "13/08/2020 || || 1000.00 || 1000.00 "

    printer.printStatement([test1, test2], item => item);
    expect(mockPrint).toHaveBeenCalled();
  });
});
