/* (c) Copyright Bojan Mazej, all rights reserved. */

import sf from './index';

describe('SecondsFormatter', () => {
    it('converts the seconds', () => {
        expect(sf.convert(7).format()).toEqual('00:00:07');
        expect(sf.convert(9518).format()).toEqual('02:38:38');
        expect(sf.convert(119518).format()).toEqual('33:11:58');
        expect(sf.convert(73173159318).format('YY:NN:DD:HH:MM:SS')).toBe('2352:06:11:13:35:18'); // 11 digits
    });
});
