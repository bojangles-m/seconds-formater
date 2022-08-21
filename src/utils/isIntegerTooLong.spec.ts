/* (c) Copyright Bojan Mazej, all rights reserved. */

import { isIntegerTooLong } from './isIntegerTooLong';

describe('isIntegerTooLong', () => {
    it('is too long', () => {
        expect(isIntegerTooLong(1234512345123451)).toBeTruthy();
        expect(isIntegerTooLong(387128372987789712)).toBeTruthy();
        expect(isIntegerTooLong(12e15)).toBeTruthy();
    });

    it('is perfect size', () => {
        expect(isIntegerTooLong(123451234512345)).toBeFalsy();
        expect(isIntegerTooLong(1556265)).toBeFalsy();
        expect(isIntegerTooLong(123)).toBeFalsy();
        expect(isIntegerTooLong(12e10)).toBeFalsy();
    });
});
