/* (c) Copyright Bojan Mazej, all rights reserved. */

import { isNegativeNumber } from './isNegativeNumber';

describe('isNegativeNumber', () => {
    it(`is positive number`, () => {
        expect(isNegativeNumber(111)).toBeFalsy();
    });

    it(`is negative number`, () => {
        expect(isNegativeNumber(-123)).toBeTruthy();
        expect(isNegativeNumber(-123.22)).toBeTruthy();
        expect(isNegativeNumber(-123e22)).toBeTruthy();
        expect(isNegativeNumber(-12345123451234512345)).toBeTruthy();
    });
});
