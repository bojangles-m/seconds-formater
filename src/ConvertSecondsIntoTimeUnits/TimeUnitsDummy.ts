/* (c) Copyright Bojan Mazej, all rights reserved. */

import { RemainderDividendQuotientHolder } from './RemainderDividendQuotient';
import { TimeUnits } from './TimeUnits';

// for 50 seconds
export const timeUnitsDummySeconds = new TimeUnits(new RemainderDividendQuotientHolder(50, 50, 0));

// for 764 seconds
export const timeUnitsDummyMinutes1 = new TimeUnits(
    new RemainderDividendQuotientHolder(44, 764, 12),
    new RemainderDividendQuotientHolder(12, 12, 0)
);

// for 1203 seconds
export const timeUnitsDummyMinutes2 = new TimeUnits(
    new RemainderDividendQuotientHolder(3, 1203, 20),
    new RemainderDividendQuotientHolder(20, 20, 0)
);

// for 67834 seconds
export const timeUnitsDummyWithHours = new TimeUnits(
    new RemainderDividendQuotientHolder(34, 67834, 1130),
    new RemainderDividendQuotientHolder(50, 1130, 18),
    new RemainderDividendQuotientHolder(18, 18, 0)
);

// for 119518 seconds
export const timeUnitsDummyWithDays = new TimeUnits(
    new RemainderDividendQuotientHolder(58, 119518, 1991),
    new RemainderDividendQuotientHolder(11, 1991, 33),
    new RemainderDividendQuotientHolder(9, 33, 1),
    new RemainderDividendQuotientHolder(1, 1, 0)
);

// for 3159318 seconds
export const timeUnitsDummyWithMonths = new TimeUnits(
    new RemainderDividendQuotientHolder(18, 3159318, 52655),
    new RemainderDividendQuotientHolder(35, 52655, 877),
    new RemainderDividendQuotientHolder(13, 877, 36),
    new RemainderDividendQuotientHolder(6, 36, 1),
    new RemainderDividendQuotientHolder(1, 1, 0)
);

// for 73159318 seconds
export const timeUnitsDummyWithYears = new TimeUnits(
    new RemainderDividendQuotientHolder(58, 73159318, 1219321),
    new RemainderDividendQuotientHolder(1, 1219321, 20322),
    new RemainderDividendQuotientHolder(18, 20322, 846),
    new RemainderDividendQuotientHolder(6, 846, 28),
    new RemainderDividendQuotientHolder(4, 28, 2),
    new RemainderDividendQuotientHolder(2, 0, 0)
);
