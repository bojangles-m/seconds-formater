/* (c) Copyright Bojan Mazej, all rights reserved. */

import sf, { SecondsFormatter } from './';

const formats = [
    'S',
    'SS',
    'M:S',
    '-M:SS',
    'MM:SS',
    'H:MM:SS',
    'D:HH:MM:SS',
    'DD:HH:MM:SS',
    '-N:DD:HH:MM:SS',
    'NN:DD:HH:MM:SS',
    '-Y:NN:DD:HH:MM:SS',
    'YY:NN:DD:HH:MM:SS',
];

describe('SecondsFormatter Object', () => {
    it(`checks if it is an object`, () => {
        expect(sf instanceof Object).toBeTruthy();
    });

    it(`is instance of Seconds Formatter`, () => {
        expect(sf instanceof SecondsFormatter).toBeTruthy();
    });
});

describe('SecondsFormatter::convert - throws error on wrong value', () => {
    it('is incorrect value', () => {
        expect(() => sf.convert(11.1)).toThrow(Error);
        expect(() => sf.convert(11e23)).toThrow(Error);
        expect(() => sf.convert(1234512345123451234512345)).toThrow(Error);
        expect(() => sf.convert(1234512345123451234512345)).toThrow(Error);
        expect(() => sf.convert(1234512345123451234512345)).toThrow(Error);
        expect(() => sf.convert(-1234512345123451)).toThrow(Error);
    });

    it('is correct value', () => {
        expect(() => sf.convert(-123)).not.toThrow(Error);
        expect(() => sf.convert(-123451234512345)).not.toThrow(Error);
        expect(() => sf.convert(123451234512345)).not.toThrow(Error);
        expect(() => sf.convert(0)).not.toThrow(Error);
    });

    it('is incorrect value - decimal value', () => {
        expect(() => sf.convert(-123.123)).toThrow(Error);
    });

    it('converts negative numbers', () => {
        expect(sf.convert(-1518).format()).toEqual('-00:25:18');
        expect(sf.convert(-9518).format()).toEqual('-02:38:38');
        expect(sf.convert(-119518).format()).toEqual('-33:11:58');
        expect(sf.convert(-3159318).format()).toEqual('-877:35:18');
    });
});

describe('SecondsFormatter::change - throws error if no string provided', () => {
    it('is incorrect value provided', () => {
        expect(() => sf.change('   ')).toThrow(Error);
    });

    it('is correct value provided', () => {
        expect(() => sf.change('11e23')).not.toThrow(Error);
    });
});

describe('SecondsFormatter - default format', () => {
    it(`represents seconds in default format`, () => {
        sf.reset();
        expect(sf.convert(7).format()).toEqual('00:00:07');
        expect(sf.convert(32).format()).toEqual('00:00:32');
        expect(sf.convert(60).format()).toEqual('00:01:00');
        expect(sf.convert(451).format()).toEqual('00:07:31');
        expect(sf.convert(1518).format()).toEqual('00:25:18');
        expect(sf.convert(9518).format()).toEqual('02:38:38');
        expect(sf.convert(119518).format()).toEqual('33:11:58');
        expect(sf.convert(3159318).format()).toEqual('877:35:18');
        expect(sf.convert(73159318).format()).toEqual('20322:01:58');
    });

    it('represents decimal value in default format and rounds decimals', () => {
        expect(sf.convert(Math.floor(-1518.654)).format()).toEqual('-00:25:19');
        expect(sf.convert(Math.floor(-9518.5464567)).format()).toEqual('-02:38:39');
        expect(sf.convert(Math.floor(-119518.567)).format()).toEqual('-33:11:59');
        expect(sf.convert(Math.floor(-3159318.123)).format()).toEqual('-877:35:19');
    });
});

describe('SecondsFormatter::format - with different formats', () => {
    it(`represents 7 seconds in different formats`, () => {
        const seconds = 7;
        sf.reset();
        expect(sf.convert(seconds).format(formats[0])).toEqual('7');
        expect(sf.convert(seconds).format(formats[1])).toEqual('07');
        expect(sf.convert(seconds).format(formats[2])).toEqual('0:7');
        expect(sf.convert(seconds).format(formats[3])).toEqual('-0:07');
        expect(sf.convert(seconds).format(formats[4])).toEqual('00:07');
    });

    it(`represents 32 seconds in different formats`, () => {
        const seconds = 32;
        sf.reset();
        expect(sf.convert(seconds).format(formats[0])).toEqual('32');
        expect(sf.convert(seconds).format(formats[1])).toEqual('32');
        expect(sf.convert(seconds).format(formats[3])).toEqual('-0:32');
        expect(sf.convert(seconds).format(formats[4])).toEqual('00:32');
    });

    it(`represents 60 seconds in different formats`, () => {
        const seconds = 60;
        sf.reset();
        expect(sf.convert(seconds).format(formats[0])).toEqual('60');
        expect(sf.convert(seconds).format(formats[1])).toEqual('60');
        expect(sf.convert(seconds).format(formats[2])).toEqual('1:0');
        expect(sf.convert(seconds).format(formats[3])).toEqual('-1:00');
        expect(sf.convert(seconds).format(formats[4])).toEqual('01:00');
    });

    it(`represents 451 seconds in different formats`, () => {
        const seconds = 451;
        sf.reset();
        expect(sf.convert(seconds).format(formats[0])).toEqual('451');
        expect(sf.convert(seconds).format(formats[1])).toEqual('451');
        expect(sf.convert(seconds).format(formats[2])).toEqual('7:31');
        expect(sf.convert(seconds).format(formats[3])).toEqual('-7:31');
        expect(sf.convert(seconds).format(formats[4])).toEqual('07:31');
    });

    it(`represents 1518 seconds in different formats`, () => {
        const seconds = 1518;
        sf.reset();
        expect(sf.convert(seconds).format(formats[0])).toEqual('1518');
        expect(sf.convert(seconds).format(formats[1])).toEqual('1518');
        expect(sf.convert(seconds).format(formats[2])).toEqual('25:18');
        expect(sf.convert(seconds).format(formats[3])).toEqual('-25:18');
        expect(sf.convert(seconds).format(formats[4])).toEqual('25:18');
        expect(sf.convert(seconds).format(formats[5])).toEqual('0:25:18');
    });

    it(`represents 9518 seconds in different formats`, () => {
        const seconds = 9518;
        sf.reset();
        expect(sf.convert(seconds).format(formats[2])).toEqual('158:38');
        expect(sf.convert(seconds).format(formats[3])).toEqual('-158:38');
        expect(sf.convert(seconds).format(formats[4])).toEqual('158:38');
        expect(sf.convert(seconds).format(formats[5])).toEqual('2:38:38');
        expect(sf.convert(seconds).format(formats[6])).toEqual('0:02:38:38');
    });

    it(`represents 119518 seconds in different formats`, () => {
        const seconds = 119518;
        sf.reset();
        expect(sf.convert(seconds).format(formats[2])).toEqual('1991:58');
        expect(sf.convert(seconds).format(formats[3])).toEqual('-1991:58');
        expect(sf.convert(seconds).format(formats[4])).toEqual('1991:58');
        expect(sf.convert(seconds).format(formats[5])).toEqual('33:11:58');
        expect(sf.convert(seconds).format(formats[6])).toEqual('1:09:11:58');
        expect(sf.convert(seconds).format(formats[7])).toEqual('01:09:11:58');
    });

    it(`represents 3159318 seconds in different formats`, () => {
        const seconds = 3159318;
        sf.reset();
        expect(sf.convert(seconds).format(formats[3])).toEqual('-52655:18');
        expect(sf.convert(seconds).format(formats[5])).toEqual('877:35:18');
        expect(sf.convert(seconds).format(formats[6])).toEqual('36:13:35:18');
        expect(sf.convert(seconds).format(formats[7])).toEqual('36:13:35:18');
        expect(sf.convert(seconds).format(formats[8])).toEqual('-1:06:13:35:18');
        expect(sf.convert(seconds).format(formats[9])).toEqual('01:06:13:35:18');
    });

    it(`represents 73159318 seconds in different formats`, () => {
        const seconds = 73159318;
        sf.reset();
        expect(sf.convert(seconds).format(formats[3])).toEqual('-1219321:58');
        expect(sf.convert(seconds).format(formats[5])).toEqual('20322:01:58');
        expect(sf.convert(seconds).format(formats[6])).toEqual('846:18:01:58');
        expect(sf.convert(seconds).format(formats[7])).toEqual('846:18:01:58');
        expect(sf.convert(seconds).format(formats[8])).toEqual('-28:06:18:01:58');
        expect(sf.convert(seconds).format(formats[9])).toEqual('28:06:18:01:58');
        expect(sf.convert(seconds).format(formats[10])).toEqual('-2:04:06:18:01:58');
        expect(sf.convert(seconds).format(formats[11])).toEqual('02:04:06:18:01:58');
    });
});

describe('SecondsFormatter::change', () => {
    it(`represents seconds default format`, () => {
        sf.reset();
        expect(sf.convert(7).format()).toEqual('00:00:07');
    });

    it(`represents seconds in format: -M:SS`, () => {
        sf.change('-M:SS');
        expect(sf.convert(7).format()).toEqual('-0:07');
        expect(sf.convert(32).format()).toEqual('-0:32');
        expect(sf.convert(60).format()).toEqual('-1:00');
        expect(sf.convert(451).format()).toEqual('-7:31');
        expect(sf.convert(1518).format()).toEqual('-25:18');
    });

    it(`represents seconds in format: MM:SS`, () => {
        sf.change('MM:SS');
        expect(sf.convert(7).format()).toEqual('00:07');
        expect(sf.convert(32).format()).toEqual('00:32');
        expect(sf.convert(60).format()).toEqual('01:00');
        expect(sf.convert(451).format()).toEqual('07:31');
        expect(sf.convert(1518).format()).toEqual('25:18');
        expect(sf.convert(9518).format()).toEqual('158:38');
    });

    it(`represents seconds in format: MM:SS`, () => {
        sf.change('H:MM:SS');
        expect(sf.convert(7).format()).toEqual('0:00:07');
        expect(sf.convert(32).format()).toEqual('0:00:32');
        expect(sf.convert(60).format()).toEqual('0:01:00');
        expect(sf.convert(451).format()).toEqual('0:07:31');
        expect(sf.convert(1518).format()).toEqual('0:25:18');
        expect(sf.convert(9518).format()).toEqual('2:38:38');
        expect(sf.convert(119518).format()).toEqual('33:11:58');
    });
});

describe('SecondsFormatter::reset - to default format', () => {
    sf.change('-M:SS');
    expect(sf.convert(7).format()).toEqual('-0:07');
    expect(sf.convert(7).reset().format()).toEqual('00:00:07');

    sf.change('MM:SS');
    expect(sf.convert(32).format()).toEqual('00:32');
    expect(sf.convert(32).reset().format()).toEqual('00:00:32');

    sf.change('H:MM:SS');
    expect(sf.convert(60).format()).toEqual('0:01:00');
    sf.reset();
    expect(sf.convert(60).format()).toEqual('00:01:00');

    sf.change('D:HH:MM:SS');
    expect(sf.convert(9518).format()).toEqual('0:02:38:38');
    expect(sf.reset().convert(9518).format()).toEqual('02:38:38');

    sf.change('-N:DD:HH:MM:SS');
    expect(sf.convert(119518).format()).toEqual('-0:01:09:11:58');
    expect(sf.reset().convert(119518).format()).toEqual('33:11:58');
});

describe('SecondsFormatter - long integer seconds in format YY:NN:DD:HH:MM:SS', () => {
    const format = 'YY:NN:DD:HH:MM:SS';
    expect(sf.convert(273159318).format(format)).toBe('08:09:11:13:35:18'); // 9 digits
    expect(sf.convert(1173159318).format(format)).toBe('37:08:18:05:35:18'); // 10 digits
    expect(sf.convert(3173159318).format(format)).toBe('102:00:06:09:08:38'); // 10 digits
    expect(sf.convert(73173159318).format(format)).toBe('2352:06:11:13:35:18'); // 11 digits
});

describe('SecondsFormatter - seconds in different text decorations', () => {
    expect(sf.convert(73159318).format('YY years NN month DD days HH hours MM min SS s')).toBe(
        '02 years 04 month 06 days 18 hours 01 min 58 s',
    );
    expect(sf.convert(73159318).format('Y years N month D days HH hours M min S s')).toBe(
        '2 years 4 month 6 days 18 hours 1 min 58 s',
    );
    expect(sf.convert(3159318).format('N month D days HH hours M min S s')).toBe('1 month 6 days 13 hours 35 min 18 s');
    expect(sf.convert(119518).format('D day HH hours M min S s')).toBe('1 day 09 hours 11 min 58 s');
    expect(sf.convert(119518).format('DDday Hhours Mmin Ss')).toBe('01day 9hours 11min 58s');
    expect(sf.convert(119518).format('Dday Hhours Mmin Ss')).toBe('1day 9hours 11min 58s');
    expect(sf.convert(119518).format('H hours M min S sec')).toBe('33 hours 11 min 58 sec');
    expect(sf.convert(119518).format('M min S sec')).toBe('1991 min 58 sec');
    expect(sf.convert(119518).format('S sec')).toBe('119518 sec');
});
