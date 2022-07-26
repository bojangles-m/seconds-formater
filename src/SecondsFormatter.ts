/* (c) Copyright Bojan Mazej, all rights reserved. */

import { ISecondsFormatter } from './types';
import { isNumberInSeconds } from './utils';

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
        value = this.convertToPositiveInteger(value);

        if (!isNumberInSeconds(value) || this.isNumberTooLong(value)) {
            throw new Error('The number should be positive or negative integer no longer then 15 chars!');
        }

        this.value = value;
        return this;
    }

    private convertToPositiveInteger(value: number): number {
        if (value < 0) {
            this.isNumberNegative = true;
            return -value;
        }
        return value;
    }

    private isNumberTooLong(value: number): boolean {
        return value.toString().length > 15;
    }

    format(format?: string): string {
        return `format: ${format ?? this.currentFormat} of value ${this.value}`;
    }
}
