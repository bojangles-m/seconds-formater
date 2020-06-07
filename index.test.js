var sf = require('./index');

describe('Changing representation format and reseting it back', () => {
    test('default format: 1143 is 00:19:03', () => {
        expect(sf.convert(1143).format()).toBe('00:19:03');
    });

    test('changed format to -MM:SS: 1143 is -19:03', () => {
        sf.change('-MM:SS');
        expect(sf.convert(1143).format()).toBe('-19:03');
    });
    test('format follows: 8734 is -145:34', () => {
        expect(sf.convert(8734).format()).toBe('-145:34');
    });
    test('format follows: 111 is -01:51', () => {
        expect(sf.convert(111).format()).toBe('-01:51');
    });
    test('format follows: 65423 is -1090:23', () => {
        expect(sf.convert(65423).format()).toBe('-1090:23');
    });

    test('Reset to default format: 783 is 00:13:03', () => {
        sf.change('reset');
        expect(sf.convert(783).format()).toBe('00:13:03');
    });
});

describe('Representing 7 sec in different formats', () => {
    test('default format: 7 is 00:00:07', () => {
        expect(sf.convert(7).format()).toBe('00:00:07');
    });
    test('"S" format: 7 is 7', () => {
        expect(sf.convert(7).format('S')).toBe('7');
    });
    test('"SS" format: 7 is 07', () => {
        expect(sf.convert(7).format('SS')).toBe('07');
    });
    test('"M:SS" format: 7 is 0:07', () => {
        expect(sf.convert(7).format('M:SS')).toBe('0:07');
    });
    test('"MM:SS" format: 7 is 00:07', () => {
        expect(sf.convert(7).format('MM:SS')).toBe('00:07');
    });
    test('"-MM:SS" format: 7 is -00:07', () => {
        expect(sf.convert(7).format('-MM:SS')).toBe('-00:07');
    });
});

describe('Representing 32 sec in different formats', () => {
    test('"SS" format: 32 is 32', () => {
        expect(sf.convert(32).format('SS')).toBe('32');
    });
    test('"M:SS" format: 32 is 0:32', () => {
        expect(sf.convert(32).format('M:SS')).toBe('0:32');
    });
    test('"-MM:SS" format: 32 is -00:32', () => {
        expect(sf.convert(32).format('-MM:SS')).toBe('-00:32');
    });
    test('"MM:SS" format: -32 is -00:32', () => {
        expect(sf.convert(-32).format('MM:SS')).toBe('-00:32');
    });
});

describe('Representing 451 sec in different formats', () => {
    test('default format: 451 is 00:07:31', () => {
        expect(sf.convert(451).format()).toBe('00:07:31');
    });
    test('"S" format: 451 is 451', () => {
        expect(sf.convert(451).format('S')).toBe('451');
    });
    test('"SS" format: 451 is 451', () => {
        expect(sf.convert(451).format('SS')).toBe('451');
    });
    test('"-M:SS" format: 451 is -7:31', () => {
        expect(sf.convert(451).format('-M:SS')).toBe('-7:31');
    });
    test('"MM:SS" format: -451 is -07:31', () => {
        expect(sf.convert(-451).format('MM:SS')).toBe('-07:31');
    });
});

describe('Representing 1518 sec in different formats', () => {
    test('default format: 1518 is 00:25:18', () => {
        expect(sf.convert(1518).format()).toBe('00:25:18');
    });
    test('"M:SS" format: 1518 is 25:18', () => {
        expect(sf.convert(1518).format('M:SS')).toBe('25:18');
    });
    test('"MM:SS" format: 1518 is 25:18', () => {
        expect(sf.convert(1518).format('MM:SS')).toBe('25:18');
    });
    test('"H:MM:SS" format: 1518 is -0:25:18', () => {
        expect(sf.convert(-1518).format('H:MM:SS')).toBe('-0:25:18');
    });
    test('"HH:MM:SS" format: 1518 is 00:25:18', () => {
        expect(sf.convert(1518).format('HH:MM:SS')).toBe('00:25:18');
    });
});

describe('Representing 9518 sec in different formats', () => {
    test('default format: 9518 is 02:38:38', () => {
        expect(sf.convert(9518).format()).toBe('02:38:38');
    });
    test('"M:S" format: 9518 is 158:38', () => {
        expect(sf.convert(9518).format('M:S')).toBe('158:38');
    });
    test('"M:SS" format: 9518 is 158:38', () => {
        expect(sf.convert(9518).format('M:SS')).toBe('158:38');
    });
    test('"MM:SS" format: 9518 is 158:38', () => {
        expect(sf.convert(9518).format('MM:SS')).toBe('158:38');
    });
    test('"-H:MM:SS" format: 9518 is -2:38:38', () => {
        expect(sf.convert(9518).format('-H:MM:SS')).toBe('-2:38:38');
    });
    test('"H:MM:SS" format: 9518 is -2:38:38', () => {
        expect(sf.convert(-9518).format('H:MM:SS')).toBe('-2:38:38');
    });
    test('"HH:MM:SS" format: 9518 is 02:38:38', () => {
        expect(sf.convert(9518).format('HH:MM:SS')).toBe('02:38:38');
    });
    test('"DD:HH:MM:SS" format: 9518 is 00:02:38:38', () => {
        expect(sf.convert(9518).format('DD:HH:MM:SS')).toBe('00:02:38:38');
    });
});

describe('Representing 119518 sec in different formats', () => {
    test('default format: 119518 is 33:11:58', () => {
        expect(sf.convert(119518).format()).toBe('33:11:58');
    });
    test('"S" format: 119518 is 119518', () => {
        expect(sf.convert(119518).format('S')).toBe('119518');
    });
    test('"M:S" format: 119518 is 1991:58', () => {
        expect(sf.convert(119518).format('M:S')).toBe('1991:58');
    });
    test('"-M:SS" format: 119518 is 1991:58', () => {
        expect(sf.convert(119518).format('-M:SS')).toBe('-1991:58');
    });
    test('"MM:SS" format: 119518 is 1991:58', () => {
        expect(sf.convert(119518).format('MM:SS')).toBe('1991:58');
    });
    test('"H:MM:SS" format: -119518 is -33:11:58', () => {
        expect(sf.convert(-119518).format('H:MM:SS')).toBe('-33:11:58');
    });
    test('"HH:MM:SS" format: 119518 is 33:11:58', () => {
        expect(sf.convert(119518).format()).toBe('33:11:58');
    });
    test('"DD:HH:MM:SS" format: 119518 is 01:09:11:58', () => {
        expect(sf.convert(119518).format('DD:HH:MM:SS')).toBe('01:09:11:58');
    });
    test('"D:HH:MM:SS" format: 119518 is 1:09:11:58', () => {
        expect(sf.convert(119518).format('D:HH:MM:SS')).toBe('1:09:11:58');
    });
});

describe('Representing 119518 sec in different text descriptions', () => {
    test('"D day HH hours M min S s" format: 119518 is "1 day 09 hours 11 min 58 s"', () => {
        expect(sf.convert(119518).format('D day HH hours M min S s')).toBe('1 day 09 hours 11 min 58 s');
    });
    test('"DDday Hhours Mmin Ss" format: 119518 is "01day 9hours 11min 58s"', () => {
        expect(sf.convert(119518).format('DDday Hhours Mmin Ss')).toBe('01day 9hours 11min 58s');
    });
    test('"Dday Hhours Mmin Ss" format: 119518 is "1day 9hours 11min 58s"', () => {
        expect(sf.convert(119518).format('Dday Hhours Mmin Ss')).toBe('1day 9hours 11min 58s');
    });
    test('"H hours M min S sec" format: 119518 is "33 hours 11 min 58 sec"', () => {
        expect(sf.convert(119518).format('H hours M min S sec')).toBe('33 hours 11 min 58 sec');
    });
    test('"M min S sec" format: 119518 is "1991 min 58 sec"', () => {
        expect(sf.convert(119518).format('M min S sec')).toBe('1991 min 58 sec');
    });
    test('"S sec" format: 119518 is "119518 sec"', () => {
        expect(sf.convert(119518).format('S sec')).toBe('119518 sec');
    });
});
