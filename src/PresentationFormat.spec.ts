/* (c) Copyright Bojan Mazej, all rights reserved. */

import { PresentationFormat } from './PresentationFormat';
import { timeUnitsDummyMinutes, timeUnitsDummyWithMonths } from './ConvertSecondsIntoTimeUnits/TimeUnitsDummy';

describe('PresentationFormat', () => {
    it('presents 764 in different formats', () => {
        const presentationFormat = new PresentationFormat(timeUnitsDummyMinutes);
        expect(presentationFormat.transform()).toEqual('00:12:44');
        expect(presentationFormat.changeFormat('SS').transform()).toEqual('764');
        expect(presentationFormat.changeFormat('MM:SS').transform()).toEqual('12:44');
        expect(presentationFormat.transform()).toEqual('12:44');
    });

    it('presents 3159318 in different formats', () => {
        const presentationFormat = new PresentationFormat(timeUnitsDummyWithMonths);
        expect(presentationFormat.transform()).toEqual('877:35:18');
        expect(presentationFormat.changeFormat('DD:HH:MM:SS').transform()).toEqual('36:13:35:18');
        expect(presentationFormat.changeFormat('NN:DD:HH:MM:SS').transform()).toEqual('01:06:13:35:18');
        expect(presentationFormat.changeFormat('YY:NN:DD:HH:MM:SS').transform()).toEqual('00:01:06:13:35:18');
        expect(presentationFormat.changeFormat('N:DD:HH:MM:SS').transform()).toEqual('1:06:13:35:18');
        expect(presentationFormat.changeFormat('SS').transform()).toEqual('3159318');
    });
});
