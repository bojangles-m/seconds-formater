/* (c) Copyright Bojan Mazej, all rights reserved. */

import { PresentationFormat } from './PresentationFormat';

const presentationFormat = new PresentationFormat();

describe('PresentationFormat', () => {
    it('replaces format with time units', () => {
        expect(presentationFormat.replaceSeconds(111)).toEqual('HH:MM:111');
        expect(presentationFormat.replaceMinutes(111)).toEqual('HH:111:SS');
        expect(presentationFormat.replaceHours(111)).toEqual('111:MM:SS');
        expect(presentationFormat.replaceDays(111, 'DD:MM')).toEqual('111:MM');
        expect(presentationFormat.replaceMonths(111, 'NN:DD')).toEqual('111:DD');
        expect(presentationFormat.replaceYears(111, 'YY:NN')).toEqual('111:NN');

        expect(presentationFormat.replaceSeconds(2, 'HH:S')).toEqual('HH:2');
        expect(presentationFormat.replaceMinutes(2, 'M:SS')).toEqual('2:SS');
        expect(presentationFormat.replaceHours(2, 'H:SS')).toEqual('2:SS');
        expect(presentationFormat.replaceDays(2, 'D:MM')).toEqual('2:MM');
        expect(presentationFormat.replaceMonths(2, 'N:DD')).toEqual('2:DD');
        expect(presentationFormat.replaceYears(2, 'Y:NN')).toEqual('2:NN');
    });
});
