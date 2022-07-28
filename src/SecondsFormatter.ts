/* (c) Copyright Bojan Mazej, all rights reserved. */

import { isNumberInSeconds, isPositiveIntegerNumberTooLong } from './utils';

export interface ISecondsFormatter {
    convert: (value: number) => this;
    format: (format?: string) => string;
    change: (format: string) => this;
    reset: () => this;
}

export class SecondsFormatter implements ISecondsFormatter {
    private value: number = 0;
    private _defaultFormat: string = 'HH:MM:SS';
    private currentFormat: string;
    private isNumberNegative: boolean = false;

    constructor() {
        this.currentFormat = this.defaultFormat;
    }

    get defaultFormat(): string {
        return this._defaultFormat;
    }

    reset(): this {
        this.currentFormat = this.defaultFormat;
        return this;
    }

    change(format: string): this {
        if (!format || typeof format !== 'string' || format.replace(/\s/g, '').toString().length === 0) {
            throw new Error('The provided format is not a string!');
        }

        this.currentFormat = format;
        return this;
    }

    convert(value: number): this {
        value = this.ifNumberIsNegativeRevert(value);

        if (this.isProvidedIncorrectValue(value)) {
            throw new Error('The number should be positive or negative integer no longer then 15 chars!');
        }

        this.value = value;
        return this;
    }

    private isProvidedIncorrectValue(value: number): boolean {
        return !isNumberInSeconds(value) || isPositiveIntegerNumberTooLong(value);
    }

    private ifNumberIsNegativeRevert(value: number): number {
        if (value < 0) {
            this.isNumberNegative = true;
            return -value;
        }
        return value;
    }

    format(format?: string): string {
        return `format: ${format ?? this.currentFormat} of value ${this.value}`;
    }
}
