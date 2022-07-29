/* (c) Copyright Bojan Mazej, all rights reserved. */

import { addLeadingZeros } from './utils';
import { ITimeUnits } from './ConvertSecondsIntoTimeUnits';

export type Pattern = {
    seconds: RegExp;
    minutes: RegExp;
    hours: RegExp;
    days: RegExp;
    months: RegExp;
    years: RegExp;
};

/**
 * The Formatted string
 * Example:
 *      [YY:NN:DD:HH:MM:SS] | 12345 => 00:00:00:03:25:45
 *      [NN:DD:HH:MM:SS]    | 12345 => 00:00:03:25:45
 *      [DD:HH:MM:SS]       | 12345 => 00:03:25:45
 *      [HH:MM:SS]          | 12345 => 03:25:45
 *      [MM:SS]             | 12345 => 205:45
 *      [SS]                | 12345 => 12345
 */
export class PresentationFormat {
    private _defaultFormat: string = 'HH:MM:SS';
    private presentationFormat: string;
    private pattern: Pattern = {
        seconds: /SS|S/,
        minutes: /MM|M/,
        hours: /HH|H/,
        days: /DD|D/,
        months: /NN|N/,
        years: /YY|Y/,
    };
    private lastKey;

    constructor(private timeUnits: ITimeUnits, format?: string) {
        this.presentationFormat = format ?? this.defaultFormat;
        this.lastKey = this.adjustedTheLastUnit();
    }

    get defaultFormat(): string {
        return this._defaultFormat;
    }

    public changeFormat(format: string) {
        this.presentationFormat = format;
        this.lastKey = this.adjustedTheLastUnit();
        return this;
    }

    public transform(): string {
        return this.replaceAllMatches(this.presentationFormat);
    }

    private adjustedTheLastUnit() {
        for (const key of Object.keys(this.pattern).reverse()) {
            if (this.pattern[key as keyof ITimeUnits].test(this.presentationFormat)) {
                return key;
            }
        }

        return 'seconds';
    }

    private replaceAllMatches(formattedString: string) {
        for (let [key, regex] of Object.entries(this.pattern)) {
            const timeUnit = this.timeUnits[key as keyof ITimeUnits];
            const value = this.lastKey === key ? timeUnit.dividend : timeUnit.remainder;
            formattedString = this.replacePatternFoundWithNumber(formattedString, value, regex);
        }

        return formattedString;
    }

    private replacePatternFoundWithNumber(formattedString: string, num: number, regex: RegExp) {
        const matchedResult = formattedString.match(regex);
        if (matchedResult === null) {
            return formattedString;
        }

        const searchForMatch = matchedResult[0];
        const totalLength = matchedResult[0].length;
        return formattedString.replace(searchForMatch, addLeadingZeros(num, totalLength));
    }
}
