/* (c) Copyright Bojan Mazej, all rights reserved. */

import { convertSecondsIntoTimeUnits, ITimeUnits } from '../ConvertSecondsIntoTimeUnits';
import { Formatter, DEFAULT_FORMAT } from '../Formatter';
import { isNumberInSeconds, isIntegerTooLong } from '../utils';

export interface ISecondsFormatter {
    convert: (value: number) => this;
    format: (format?: string) => string;
    change: (format: string) => this;
    reset: () => this;
}

export class SecondsFormatter implements ISecondsFormatter {
    private valueInTimeUnits: ITimeUnits | undefined;
    private currentFormat: string = DEFAULT_FORMAT;

    reset(): this {
        this.currentFormat = DEFAULT_FORMAT;
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
        if (this.isIncorrectValue(value)) {
            throw new Error('The number should be positive or negative integer no longer then 15 chars!');
        }

        this.valueInTimeUnits = convertSecondsIntoTimeUnits(value);
        return this;
    }

    private isIncorrectValue(value: number): boolean {
        return !isNumberInSeconds(value) || isIntegerTooLong(value);
    }

    format(format?: string): string {
        if (!this.valueInTimeUnits) {
            throw new Error('Please provide the value in seconds to be converted!');
        }

        return new Formatter(this.valueInTimeUnits, format ?? this.currentFormat).transform();
    }
}
