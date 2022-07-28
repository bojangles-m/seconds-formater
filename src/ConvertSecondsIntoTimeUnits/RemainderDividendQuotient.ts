/* (c) Copyright Bojan Mazej, all rights reserved. */

export interface IRemainderDividendQuotient {
    remainder: number;
    dividend: number;
    quotient: number;
    setRemainder(remainder: number): this;
    calculate(dividend: number, divisor: number): this;
}

export class RemainderDividendQuotient implements IRemainderDividendQuotient {
    constructor(public remainder = 0, public dividend = 0, public quotient = 0) {}

    public setRemainder(remainder: number) {
        this.remainder = remainder;
        return this;
    }

    /**
     * @param {Number} dividend - Number of base unit (seconds) to be converted.
     * @param {Number} divisor - The number by which to multiply the unit to obtain its equivalent in the base unit (seconds).
     * @returns {Array}
     *   [
     *      Number = Remainder after dividing base unit
     *      Number = Dividend
     *      Number = Quotient transferred into the next step
     *   ]
     */
    public calculate(dividend: number, divisor: number): this {
        this.remainder = Math.floor(dividend % divisor);
        this.dividend = dividend;
        this.quotient = Math.floor(dividend / divisor);
        return this;
    }
}
