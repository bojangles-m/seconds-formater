/* (c) Copyright Bojan Mazej, all rights reserved. */

import { isPositiveIntegerNumberTooLong } from './isPositiveIntegerNumberTooLong';

describe('isIntegerNumberTooLong', () => {
    it('is too long', () => {
        expect(isPositiveIntegerNumberTooLong(1234512345123451)).toBeTruthy();
        expect(isPositiveIntegerNumberTooLong(387128372987789712)).toBeTruthy();
    });

    it('is right size', () => {
        expect(isPositiveIntegerNumberTooLong(123451234512345)).toBeFalsy();
        expect(isPositiveIntegerNumberTooLong(1556265)).toBeFalsy();
        expect(isPositiveIntegerNumberTooLong(123)).toBeFalsy();
    });
});
