const functions = require('./functions');

test('returnTwo() should equal 2', () => {
   expect(functions.returnTwo()).toEqual(2);
});
test('greeting() to equal "Hello, dynamic input', () => {
    expect(functions.greeting("James")).toEqual("Hello, James.");
    expect(functions.greeting("Jill")).toEqual("Hello, Jill.");
});

describe('Math functions:', () => {
    test('add() to equal correct sum', () => {
        expect(functions.add(1,2)).toEqual(3);
        expect(functions.add(5,9)).toEqual(14);
    });
    test('multiply() to equal correct product', () => {
        expect(functions.multiply(2,1)).toEqual(2);
        expect(functions.multiply(5,9,)).toEqual(45);
    });
    test('divide() to equal correct quotient', () => {
        expect(functions.divide(2,1)).toEqual(2);
        expect(functions.divide(12,4)).toEqual(3);
    });
    test('subtract() to equal correct difference', () => {
        expect(functions.subtract(5,3)).toEqual(2);
        expect(functions.subtract(10,2)).toEqual(8);
    })
})
