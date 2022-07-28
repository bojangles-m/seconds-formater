/* (c) Copyright Bojan Mazej, all rights reserved. */

import { RemainderDividendQuotientHolder } from './RemainderDividendQuotient';
import { TimeUnits } from './TimeUnits';

// for 300 seconds
export const timeUnitsDummy1 = new TimeUnits(
    new RemainderDividendQuotientHolder(0, 300, 5),
    new RemainderDividendQuotientHolder(5, 5, 0)
);

// for 764 seconds
export const timeUnitsDummy2 = new TimeUnits(
    new RemainderDividendQuotientHolder(44, 764, 12),
    new RemainderDividendQuotientHolder(12, 12, 0)
);

// for 1203 seconds
export const timeUnitsDummy3 = new TimeUnits(
    new RemainderDividendQuotientHolder(3, 1203, 20),
    new RemainderDividendQuotientHolder(20, 20, 0)
);

// for 67834 seconds
export const timeUnitsDummy4 = new TimeUnits(
    new RemainderDividendQuotientHolder(34, 67834, 1130),
    new RemainderDividendQuotientHolder(50, 1130, 18),
    new RemainderDividendQuotientHolder(18, 18, 0)
);
