/* (c) Copyright Bojan Mazej, all rights reserved. */

import sf, { SecondsFormatter } from './index';
import { DEFAULT_FORMAT } from './defaultFormat';

// const seconds = [1143, 8734, 111, 65423, 783];

const seconds = [7, 32, 60, 451, 1518, 9518, 119518, 3159318, 73159318];
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
    it('is incorrect value to convert', () => {
        expect(() => sf.convert(11.1)).toThrow(Error);
        expect(() => sf.convert(11e23)).toThrow(Error);
        expect(() => sf.convert(1234512345123451234512345)).toThrow(Error);
        expect(() => sf.convert(1234512345123451234512345)).toThrow(Error);
        expect(() => sf.convert(1234512345123451234512345)).toThrow(Error);
        expect(() => sf.convert(-1234512345123451)).toThrow(Error);
    });

    it('is correct value to convert', () => {
        expect(() => sf.convert(-123)).not.toThrow(Error);
        expect(() => sf.convert(-123451234512345)).not.toThrow(Error);
        expect(() => sf.convert(123451234512345)).not.toThrow(Error);
        expect(() => sf.convert(0)).not.toThrow(Error);
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
        // 7, 32, 60, 451, 1518, 9518, 119518, 3159318, 73159318;
        sf.reset();
        expect(sf.convert(seconds[0]).format()).toEqual('00:00:07');
        expect(sf.convert(seconds[1]).format()).toEqual('00:00:32');
        expect(sf.convert(seconds[2]).format()).toEqual('00:01:00');
        expect(sf.convert(seconds[3]).format()).toEqual('00:07:31');
        expect(sf.convert(seconds[4]).format()).toEqual('00:25:18');
        expect(sf.convert(seconds[5]).format()).toEqual('02:38:38');
        expect(sf.convert(seconds[6]).format()).toEqual('33:11:58');
        expect(sf.convert(seconds[7]).format()).toEqual('877:35:18');
        expect(sf.convert(seconds[8]).format()).toEqual('20322:01:58');
    });
});

describe('SecondsFormatter - method format with passed new format', () => {
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

// describe('SecondsFormatter - method change', () => {
//     it(`represents seconds in format: first change`, () => {
//         expect(sf.convert(seconds[0]).change('first change').format()).toEqual(
//             `format: first change of value ${seconds[0]}`
//         );
//     });

//     it(`represents seconds in format: second change`, () => {
//         expect(sf.convert(seconds[0]).change('second change').format()).toEqual(
//             `format: second change of value ${seconds[0]}`
//         );
//     });
// });

// describe('SecondsFormatter - reset to default format', () => {
//     const newFormat = 'AA:BB';

//     it(`represents seconds in new format`, () => {
//         sf.change(newFormat);

//         expect(sf.convert(seconds[0]).format()).toEqual(`format: ${newFormat} of value ${seconds[0]}`);
//         expect(sf.convert(seconds[1]).format()).toEqual(`format: ${newFormat} of value ${seconds[1]}`);
//     });

//     it(`resets and represents seconds in default format`, () => {
//         sf.reset();

//         expect(sf.convert(seconds[0]).format()).toEqual(`format: ${format[0]} of value ${seconds[0]}`);
//         expect(sf.convert(seconds[1]).format()).toEqual(`format: ${format[0]} of value ${seconds[1]}`);
//     });
// });
