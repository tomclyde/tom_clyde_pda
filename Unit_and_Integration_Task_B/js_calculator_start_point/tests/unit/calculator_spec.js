var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  //`calculator.add()` - add 1 to 4 and get 5
  it('it should add 2 numbers correctly', function(){
    calculator.add(1+4);
    assert.strictEqual(calculator.runningTotal, 5.0);
  })

 //  `calculator.subtract()` subtract 4 from 7 and get 3
  it('it should subtract 2 numbers correctly', function(){
    calculator.subtract(4 - 7);
    assert.strictEqual(calculator.runningTotal, 3.0);
 })
 // - `calculator.multiply()` - multiply 3 by 5 and get 15
  it('it should multiply 2 numbers correctly', function(){
    calculator.previousTotal = 3
    calculator.multiply(5);
    assert.strictEqual(calculator.runningTotal, 15.0);
  })

 // - `calculator.divide()` - divide 21 by 7 and get 3
  it('it should divide 2 numbers correctly', function(){
    calculator.previousTotal = 21
    calculator.divide(7);
    assert.strictEqual(calculator.runningTotal, 3.0);
 })
 //
 // Integration Tests:
 //
 // - `calculator.numberClick()` - concatenate multiple number button clicks
  it('it should concatenate multiple number button clicks correctly', function(){
    calculator.numberClick(2);
    calculator.numberClick(3);
    calculator.numberClick(4);
    assert.strictEqual(calculator.runningTotal, 234);
  })
 // - `calculator.operatorClick()` - chain multiple operations together

  it('it should concatenate multiple operations together', function(){
    calculator.previousTotal = 2
    calculator.runningTotal = 2
    calculator.previousOperator = '+'
    calculator.operatorClick('+');
    assert.strictEqual(calculator.runningTotal, 4);
 })
 // - `calculator.clearClick()` - clear the running total without affecting the calculation
  it('it should clear the runningTotal without affecting calc', function(){
    calculator.runningTotal = 4
    calculator.previousOperator = '+'
    calculator.previousTotal = 2
    calculator.clearClick();
    assert.strictEqual(calculator.previousOperator, '+');
  })

});
