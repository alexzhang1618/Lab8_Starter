// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
describe('isPhoneNumber', () => {
    test('isPhoneNumber', () => {
        expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
    });
    test('isPhoneNumber', () => {
        expect(functions.isPhoneNumber('999-111-1222')).toBe(true);
    });
    test('isPhoneNumber', () => {
        expect(functions.isPhoneNumber('34567890')).toBe(false);
    });
    test('isPhoneNumber', () => {
        expect(functions.isPhoneNumber('')).toBe(false);
    });
})

describe('isEmail', () => {
    test('isEmail', () => {
        expect(functions.isEmail('john@email.com')).toBe(true);
    });
    test('isEmail', () => {
        expect(functions.isEmail('jane@email.org')).toBe(true);
    });
    test('isEmail', () => {
        expect(functions.isEmail('@email.com')).toBe(false);
    });
    test('isEmail', () => {
        expect(functions.isEmail('')).toBe(false);
    });
});

describe('isStrongPassword', () => {
    test('isStrongPassword', () => {
        expect(functions.isStrongPassword('asdf')).toBe(true);
    });
    test('isStrongPassword', () => {
        expect(functions.isStrongPassword('asdf11331223')).toBe(true);
    });
    test('isStrongPassword', () => {
        expect(functions.isStrongPassword('')).toBe(false);
    });
    test('isStrongPassword', () => {
        expect(functions.isStrongPassword('1234981270359812734239084')).toBe(false);
    });
});

describe('isDate', () => {
    test('isDate', () => {
        expect(functions.isDate('12/12/2022')).toBe(true);
    });
    test('isDate', () => {
        expect(functions.isDate('1/1/2022')).toBe(true);
    });
    test('isDate', () => {
        expect(functions.isDate('')).toBe(false);
    });
    test('isDate', () => {
        expect(functions.isDate('111/22/2022')).toBe(false);
    });
});

describe('isHexColor', () => {
    test('isHexColor', () => {
        expect(functions.isHexColor('000')).toBe(true);
    });
    test('isHexColor', () => {
        expect(functions.isHexColor('fff000')).toBe(true);
    });
    test('isHexColor', () => {
        expect(functions.isHexColor('')).toBe(false);
    });
    test('isHexColor', () => {
        expect(functions.isHexColor('f')).toBe(false);
    });
});