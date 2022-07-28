/* (c) Copyright Bojan Mazej, all rights reserved. */

import { convertConvertSecondsIntoTimeUnits } from './ConvertSecondsIntoTimeUnits';
import { timeUnitsDummy1, timeUnitsDummy2, timeUnitsDummy3, timeUnitsDummy4 } from './TimeUnitsDummy';

describe('convertConvertSecondsIntoTimeUnits', () => {
    it('convert seconds into time units', () => {
        expect(convertConvertSecondsIntoTimeUnits(300)).toEqual(timeUnitsDummy1);
        expect(convertConvertSecondsIntoTimeUnits(764)).toEqual(timeUnitsDummy2);
        expect(convertConvertSecondsIntoTimeUnits(1203)).toEqual(timeUnitsDummy3);
        expect(convertConvertSecondsIntoTimeUnits(67834)).toEqual(timeUnitsDummy4);
    });
});
