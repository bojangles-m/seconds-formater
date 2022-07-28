/* (c) Copyright Bojan Mazej, all rights reserved. */

export interface IRemainderDividendQuotientHolder {
    remainder: number;
    dividend: number;
    quotient: number;
}

/**
 * @param {Number} dividend - Number of base unit (seconds) to be converted.
 * @param {Number} divisor - The number by which to multiply the unit to obtain its equivalent in the base unit (seconds).
 * @returns {Object} IRemainderDividendQuotientHolder
 *   {
 *      remainder: number; Remainder after dividing base unit
 *      dividend: number;
 *      quotient: number; Quotient transferred into the next step
 *   }
 */
export const remainderDividendQuotient = (dividend: number, divisor: number): IRemainderDividendQuotientHolder => {
    return new RemainderDividendQuotientHolder(
        Math.floor(dividend % divisor),
        dividend,
        Math.floor(dividend / divisor)
    );
};

export class RemainderDividendQuotientHolder implements IRemainderDividendQuotientHolder {
    constructor(public remainder = 0, public dividend = 0, public quotient = 0) {}
}
