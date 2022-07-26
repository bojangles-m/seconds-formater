/* (c) Copyright Bojan Mazej, all rights reserved. */

import { ISecondsFormatter } from './types';

export class SecondsFormatter implements ISecondsFormatter {
    private value: number = 0;
    private _defaultFormat: string = 'HH:MM:SS';
    private currentFormat: string;

    constructor() {
        this.currentFormat = this.defaultFormat;
    }

    get defaultFormat() {
        return this._defaultFormat;
    }

    reset() {
        this.currentFormat = this.defaultFormat;
        return this;
    }

    change(format: string) {
        this.currentFormat = format;
        return this;
    }

    convert(value: number) {
        this.value = value;
        return this;
    }

    format(format?: string) {
        return `format: ${format ?? this.currentFormat} of value ${this.value}`;
    }
}
