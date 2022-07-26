/* (c) Copyright Bojan Mazej, all rights reserved. */

import { isNumberInSeconds } from './isNumberInSeconds';

describe('isNumberInSeconds', () => {
    it(`is positive number`, () => {
        expect(isNumberInSeconds(111)).toBeTruthy();
        expect(isNumberInSeconds(111.22)).toBeFalsy();
        expect(isNumberInSeconds(123e22)).toBeFalsy();
    });

    it(`is negative number`, () => {
        expect(isNumberInSeconds(-123)).toBeTruthy();
        expect(isNumberInSeconds(-123.22)).toBeFalsy();
        expect(isNumberInSeconds(-123e22)).toBeFalsy();
        expect(isNumberInSeconds(-12345123451234512345)).toBeTruthy();
    });
});
