/* (c) Copyright Bojan Mazej, all rights reserved. */

import { convertSecondsIntoTimeUnits } from './ConvertSecondsIntoTimeUnits';
import {
    timeUnitsDummySeconds,
    timeUnitsDummyMinutes1,
    timeUnitsDummyMinutes2,
    timeUnitsDummyWithHours,
    timeUnitsDummyWithDays,
    timeUnitsDummyWithMonths,
    timeUnitsDummyWithYears,
} from './TimeUnitsDummy';

describe('convertSecondsIntoTimeUnits', () => {
    it('convert 50 seconds - max is seconds', () => {
        expect(convertSecondsIntoTimeUnits(50)).toEqual(timeUnitsDummySeconds);
    });

    it('convert 764, 1203 seconds - max is minutes', () => {
        expect(convertSecondsIntoTimeUnits(764)).toEqual(timeUnitsDummyMinutes1);
        expect(convertSecondsIntoTimeUnits(1203)).toEqual(timeUnitsDummyMinutes2);
    });

    it('convert 67834 seconds - max is hours', () => {
        expect(convertSecondsIntoTimeUnits(67834)).toEqual(timeUnitsDummyWithHours);
    });

    it('convert 119518 seconds - max is days', () => {
        expect(convertSecondsIntoTimeUnits(119518)).toEqual(timeUnitsDummyWithDays);
    });

    it('convert 3159318 seconds - max is months', () => {
        expect(convertSecondsIntoTimeUnits(3159318)).toEqual(timeUnitsDummyWithMonths);
    });

    it('convert 73159318 seconds - max is years', () => {
        expect(convertSecondsIntoTimeUnits(73159318)).toEqual(timeUnitsDummyWithYears);
    });
});
