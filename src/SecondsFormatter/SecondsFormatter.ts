/* (c) Copyright Bojan Mazej, all rights reserved. */

import { convertSecondsIntoTimeUnits, ITimeUnits } from '../ConvertSecondsIntoTimeUnits';
import { Formatter, DEFAULT_FORMAT } from '../Formatter';

export interface ISecondsFormatter {
    convert: (value: number) => this;
    format: (format?: string) => string;
    change: (format: string) => this;
    reset: () => this;
}

export class SecondsFormatter implements ISecondsFormatter {
    private valueInTimeUnits: ITimeUnits = convertSecondsIntoTimeUnits(0);
    private currentFormat: string = DEFAULT_FORMAT;
    private isNegativeValue: boolean = false;

    reset(): this {
        this.currentFormat = DEFAULT_FORMAT;
        return this;
    }

    change(format: string): this {
        this.currentFormat = this.checkFormat(format) ?? this.currentFormat;
        return this;
    }

    convert(value: number): this {
        this.valueInTimeUnits = convertSecondsIntoTimeUnits(this.validateTheValue(value));
        return this;
    }

    private validateTheValue(value: number | string): number {
        let newValue = parseInt(`${value}`);

        if (isNaN(newValue)) {
            throw new Error('The value should be integer number!');
        }

        return this.checkForNegativeValue(newValue);
    }

    private checkForNegativeValue(value: number): number {
        this.isNegativeValue = false;
        if (value >= 0) {
            return value;
        }

        this.isNegativeValue = true;
        return -value;
    }

    format(format?: string): string {
        return new Formatter(this.valueInTimeUnits, this.checkFormat(format) ?? this.currentFormat).transform(
            this.isNegativeValue ? '-' : '',
        );
    }

    private checkFormat(format: string | undefined): string | undefined {
        if (format && !this.isCorrectFormat(format)) {
            throw new Error(`The provided format [ '${format}' ] is not a string!`);
        }

        return format;
    }

    private isCorrectFormat(format: string): boolean {
        return !(!format || typeof format !== 'string' || format.replace(/\s/g, '').toString().length === 0);
    }
}
