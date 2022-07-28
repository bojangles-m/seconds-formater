/* (c) Copyright Bojan Mazej, all rights reserved. */

import { addLeadingZeros } from './utils';

export class PresentationFormat {
    private defaultFormat: string = 'HH:MM:SS';
    private currentFormat: string;
    private pattern = {
        seconds: /SS|S/,
        minutes: /MM|M/,
        hours: /HH|H/,
        days: /DD|D/,
        months: /NN|N/,
        years: /YY|Y/,
    };

    constructor(private format?: string) {
        this.currentFormat = format ?? this.defaultFormat;
    }

    public replaceSeconds = (seconds: number, format?: string) =>
        this.replace(format ?? this.currentFormat, seconds, this.pattern.seconds);
    public replaceMinutes = (minutes: number, format?: string) =>
        this.replace(format ?? this.currentFormat, minutes, this.pattern.minutes);
    public replaceHours = (hours: number, format?: string) =>
        this.replace(format ?? this.currentFormat, hours, this.pattern.hours);
    public replaceDays = (days: number, format?: string) =>
        this.replace(format ?? this.currentFormat, days, this.pattern.days);
    public replaceMonths = (months: number, format?: string) =>
        this.replace(format ?? this.currentFormat, months, this.pattern.months);
    public replaceYears = (years: number, format?: string) =>
        this.replace(format ?? this.currentFormat, years, this.pattern.years);

    private replace(str: string, num: number, regex: RegExp) {
        const m = str.match(regex);
        return m === null ? str : str.replace(m[0], addLeadingZeros(num, m[0].length));
    }
}
