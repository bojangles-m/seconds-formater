/* (c) Copyright Bojan Mazej, all rights reserved. */

import { Formatter } from './Formatter';
import { timeUnitsDummyMinutes, timeUnitsDummyWithMonths } from '../ConvertSecondsIntoTimeUnits/TimeUnitsDummy';

describe('PresentationFormat', () => {
    it('presents 764 in different formats', () => {
        const formatter = new Formatter(timeUnitsDummyMinutes);
        expect(formatter.transform()).toEqual('00:12:44');
        expect(formatter.changeFormat('SS').transform()).toEqual('764');
        expect(formatter.changeFormat('MM:SS').transform()).toEqual('12:44');
        expect(formatter.transform()).toEqual('12:44');
    });

    it('presents 3159318 in different formats', () => {
        const formatter = new Formatter(timeUnitsDummyWithMonths);
        expect(formatter.transform()).toEqual('877:35:18');
        expect(formatter.changeFormat('DD:HH:MM:SS').transform()).toEqual('36:13:35:18');
        expect(formatter.changeFormat('NN:DD:HH:MM:SS').transform()).toEqual('01:06:13:35:18');
        expect(formatter.changeFormat('YY:NN:DD:HH:MM:SS').transform()).toEqual('00:01:06:13:35:18');
        expect(formatter.changeFormat('N:DD:HH:MM:SS').transform()).toEqual('1:06:13:35:18');
        expect(formatter.changeFormat('SS').transform()).toEqual('3159318');
    });
});
