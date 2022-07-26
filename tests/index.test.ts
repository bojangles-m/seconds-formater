import sf, { SecondsFormatter } from '../src/index';

// 60*60*24*365
const format = [sf.defaultFormat, 'S', 'SS', 'M:S', '-M:SS', 'MM:SS', 'H:MM:SS'];
// const format2 = "M:S";
// const format3 = "-M:SS";
// const format4 = "MM:SS";
// const format5 = "H:MM:SS";
// const format6 = "HH:MM:SS";
// const format7 = "D:HH:MM:SS";
// const format8 = "DD:HH:MM:SS";
// const format9 = "-N:DD:HH:MM:SS";
// const format10 = "NN:DD:HH:MM:SS";
// const format11 = "-Y:NN:DD:HH:MM:SS";
// const format12 = "YY:NN:DD:HH:MM:SS";

const seconds = [1143, 8734, 111, 65423, 783];

describe('SecondsFormatter Object', () => {
    it(`checks if it is an object`, () => {
        expect(sf instanceof Object).toBeTruthy();
    });

    it(`is instance of Seconds Formatter`, () => {
        expect(sf instanceof SecondsFormatter).toBeTruthy();
    });
});

describe('SecondsFormatter - default format', () => {
    it(`represents seconds in default format`, () => {
        expect(sf.convert(seconds[0]).format()).toEqual(`format: ${sf.defaultFormat} of value ${seconds[0]}`);
    });
});

describe('SecondsFormatter - method change', () => {
    it(`represents seconds in format: first change`, () => {
        expect(sf.convert(seconds[0]).change('first change').format()).toEqual(
            `format: first change of value ${seconds[0]}`
        );
    });

    it(`represents seconds in format: second change`, () => {
        expect(sf.convert(seconds[0]).change('second change').format()).toEqual(
            `format: second change of value ${seconds[0]}`
        );
    });
});

describe('SecondsFormatter - reset to default format', () => {
    const newFormat = 'AA:BB';

    it(`represents seconds in new format`, () => {
        sf.change(newFormat);

        expect(sf.convert(seconds[0]).format()).toEqual(`format: ${newFormat} of value ${seconds[0]}`);
        expect(sf.convert(seconds[1]).format()).toEqual(`format: ${newFormat} of value ${seconds[1]}`);
    });

    it(`resets and represents seconds in default format`, () => {
        sf.reset();

        expect(sf.convert(seconds[0]).format()).toEqual(`format: ${format[0]} of value ${seconds[0]}`);
        expect(sf.convert(seconds[1]).format()).toEqual(`format: ${format[0]} of value ${seconds[1]}`);
    });
});
