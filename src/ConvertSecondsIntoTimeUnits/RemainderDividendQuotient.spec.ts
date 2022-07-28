/* (c) Copyright Bojan Mazej, all rights reserved. */

import { remainderDividendQuotient } from './RemainderDividendQuotient';

describe('remainderDividendQuotient', () => {
    it('returns correct remainder, dividend, quotient', () => {
        expect(remainderDividendQuotient(57, 5)).toEqual({ dividend: 57, quotient: 11, remainder: 2 });
        expect(remainderDividendQuotient(300, 5)).toEqual({ dividend: 300, quotient: 60, remainder: 0 });
        expect(remainderDividendQuotient(13328, 32)).toEqual({ dividend: 13328, quotient: 416, remainder: 16 });
        expect(remainderDividendQuotient(98374298, 7632)).toEqual({
            dividend: 98374298,
            quotient: 12889,
            remainder: 5450,
        });
    });
});
