var sf = require('./index');

// 60*60*24*365
const format0 = 'S';
const format1 = 'SS';
const format2 = 'M:S';
const format3 = '-M:SS';
const format4 = 'MM:SS';
const format5 = 'H:MM:SS';
const format6 = 'HH:MM:SS';
const format7 = 'D:HH:MM:SS';
const format8 = 'DD:HH:MM:SS';
const format9 = '-N:DD:HH:MM:SS';
const format10 = 'NN:DD:HH:MM:SS';
const format11 = '-Y:NN:DD:HH:MM:SS';
const format12 = 'YY:NN:DD:HH:MM:SS';

const vSeconds1 = 1143;
const vSeconds2 = 8734;
const vSeconds3 = 111;
const vSeconds4 = 65423;
const vSeconds5 = 783;
describe('Changing representation format and resetting it back', () => {
    const res1 = '00:19:03';
    it(`represent default format "${format6}": ${vSeconds1} is ${res1}`, () => {
        expect(sf.convert(vSeconds1).format()).toBe(res1);
    });


    const changeFormat = '-MM:SS';
    const res11 = '-19:03';
    it(`represent change format to "${changeFormat}": ${vSeconds1} is ${res11}`, () => {
        expect(sf.change('-MM:SS').convert(vSeconds1).format()).toBe(res11);
    });
    const res2 = '-145:34';
    it(`follows the same format "${changeFormat}": ${vSeconds2} is ${res2}`, () => {
        expect(sf.convert(vSeconds2).format()).toBe(res2);
    });
    const res3 = '-01:51';
    it(`follows the same format "${changeFormat}": ${vSeconds3} is ${res3}`, () => {
        expect(sf.convert(vSeconds3).format()).toBe(res3);
    });
    const res4 = '-1090:23';
    it(`follows the same format "${changeFormat}": ${vSeconds4} is ${res4}`, () => {
        expect(sf.convert(vSeconds4).format()).toBe(res4);
    });


    const res5 = '00:13:03';
    it(`resets to default format "${format6}": ${vSeconds5} is ${res5}`, () => {
        expect(sf.reset().convert(vSeconds5).format()).toBe(res5);
    });
});

const sssSeconds = 7;
const sssSecondsNeg = -7;
describe(`Representing ${sssSeconds} sec in different formats`, () => {
    const res0 = sssSeconds;
    it(`represent "${format0}" format: ${sssSeconds} is ${res0}`, () => {
        expect(sf.convert(sssSeconds).format(format0)).toBe(res0.toString());
    });
    const res1 = '07';
    it(`represent "${format1}" format: ${sssSeconds} is ${res1}`, () => {
        expect(sf.convert(sssSeconds).format(format1)).toBe(res1.toString());
    });
    const res2 = '0:7';
    it(`represent "${format2}" format: ${sssSeconds} is ${res2}`, () => {
        expect(sf.convert(sssSeconds).format(format2)).toBe(res2);
    });
    const res3 = '-0:07';
    it(`represent "${format3}" format: ${sssSecondsNeg} is ${res3}`, () => {
        expect(sf.convert(sssSecondsNeg).format(format3)).toBe(res3);
    });
    const res4 = '00:07';
    it(`represent "${format4}" format: ${sssSeconds} is ${res4}`, () => {
        expect(sf.convert(sssSeconds).format(format4)).toBe(res4);
    });
});

const ssSeconds = 32;
const ssSecondsNeg = -32;
describe(`Representing ${ssSeconds} sec in different formats`, () => {
    const res0 = ssSeconds;
    it(`represent "${format0}" format: ${ssSeconds} is ${res0}`, () => {
        expect(sf.convert(ssSeconds).format(format0)).toBe(res0.toString());
    });
    const res1 = ssSeconds;
    it(`represent "${format1}" format: ${ssSeconds} is ${res1}`, () => {
        expect(sf.convert(ssSeconds).format(format1)).toBe(res1.toString());
    });
    const res2 = '0:32';
    it(`represent "${format2}" format: ${ssSeconds} is ${res2}`, () => {
        expect(sf.convert(ssSeconds).format(format2)).toBe(res2);
    });
    const res3 = '-0:32';
    it(`represent "${format3}" format: ${ssSecondsNeg} is ${res3}`, () => {
        expect(sf.convert(ssSecondsNeg).format(format3)).toBe(res3);
    });
    const res4 = '00:32';
    it(`represent "${format4}" format: ${ssSeconds} is ${res4}`, () => {
        expect(sf.convert(ssSeconds).format(format4)).toBe(res4);
    });
});

const sSeconds = 451;
const sSecondsNeg = -451;
describe(`Representing ${sSeconds} sec in different formats`, () => {
    const res1 = sSeconds;
    it(`represent "${format1}" format: ${sSeconds} is ${res1}`, () => {
        expect(sf.convert(sSeconds).format(format1)).toBe(res1.toString());
    });
    const res2 = '7:31';
    it(`represent "${format2}" format: ${sSeconds} is ${res2}`, () => {
        expect(sf.convert(sSeconds).format(format2)).toBe(res2);
    });
    const res3 = '-7:31';
    it(`represent "${format3}" format: ${sSeconds} is ${res3}`, () => {
        expect(sf.convert(sSeconds).format(format3)).toBe(res3);
    });
    const res4 = '07:31';
    it(`represent "${format4}" format: ${sSeconds} is ${res4}`, () => {
        expect(sf.convert(sSeconds).format(format4)).toBe(res4);
    });
    const res5 = '-0:07:31';
    it(`represent "${format5}" format: ${sSecondsNeg} is ${res5}`, () => {
        expect(sf.convert(sSecondsNeg).format(format5)).toBe(res5);
    });
});

const mSeconds = 1518;
const mSecondsNeg = -1518;
describe(`Representing ${mSeconds} sec in different formats`, () => {
    const res1 = mSeconds;
    it(`represent "${format1}" format: ${mSeconds} is ${res1}`, () => {
        expect(sf.convert(mSeconds).format(format1)).toBe(res1.toString());
    });
    const res2 = '25:18';
    it(`represent "${format2}" format: ${mSeconds} is ${res2}`, () => {
        expect(sf.convert(mSeconds).format(format2)).toBe(res2);
    });
    const res3 = '-25:18';
    it(`represent "${format3}" format: ${mSeconds} is ${res3}`, () => {
        expect(sf.convert(mSeconds).format(format3)).toBe(res3);
    });
    const res4 = '25:18';
    it(`represent "${format4}" format: ${mSeconds} is ${res4}`, () => {
        expect(sf.convert(mSeconds).format(format4)).toBe(res4);
    });
    const res5 = '-0:25:18';
    it(`represent "${format5}" format: ${mSecondsNeg} is ${res5}`, () => {
        expect(sf.convert(mSecondsNeg).format(format5)).toBe(res5);
    });
    const res6 = '00:25:18';
    it(`represent "${format6}" format: ${mSeconds} is ${res6}`, () => {
        expect(sf.convert(mSeconds).format(format6)).toBe(res6);
    });
    const res7 = '0:00:25:18';
    it(`represent "${format7}" format: ${mSeconds} is ${res7}`, () => {
        expect(sf.convert(mSeconds).format(format7)).toBe(res7);
    });
    const res8 = '00:00:25:18';
    it(`represent "${format8}" format: ${mSeconds} is ${res8}`, () => {
        expect(sf.convert(mSeconds).format(format8)).toBe(res8);
    });
});

const hSeconds = 9518;
const hSecondsNeg = -9518;
describe(`Representing ${hSeconds} sec in different formats`, () => {
    const res1 = hSeconds;
    it(`represent "${format1}" format: ${hSeconds} is ${res1}`, () => {
        expect(sf.convert(hSeconds).format(format1)).toBe(res1.toString());
    });
    const res2 = '158:38';
    it(`represent "${format2}" format: ${hSeconds} is ${res2}`, () => {
        expect(sf.convert(hSeconds).format(format2)).toBe(res2);
    });
    const res3 = '-158:38';
    it(`represent "${format3}" format: ${hSeconds} is ${res3}`, () => {
        expect(sf.convert(hSeconds).format(format3)).toBe(res3);
    });
    const res4 = '158:38';
    it(`represent "${format4}" format: ${hSeconds} is ${res4}`, () => {
        expect(sf.convert(hSeconds).format(format4)).toBe(res4);
    });
    const res5 = '-2:38:38';
    it(`represent "${format5}" format: ${hSecondsNeg} is ${res5}`, () => {
        expect(sf.convert(hSecondsNeg).format(format5)).toBe(res5);
    });
    const res6 = '02:38:38';
    it(`represent "${format6}" format: ${hSeconds} is ${res6}`, () => {
        expect(sf.convert(hSeconds).format(format6)).toBe(res6);
    });
    const res7 = '0:02:38:38';
    it(`represent "${format7}" format: ${hSeconds} is ${res7}`, () => {
        expect(sf.convert(hSeconds).format(format7)).toBe(res7);
    });
    const res8 = '00:02:38:38';
    it(`represent "${format8}" format: ${hSeconds} is ${res8}`, () => {
        expect(sf.convert(hSeconds).format(format8)).toBe(res8);
    });
    const res9 = '-0:00:02:38:38';
    it(`represent "${format9}" format: ${hSecondsNeg} is ${res9}`, () => {
        expect(sf.convert(hSecondsNeg).format(format9)).toBe(res9);
    });
    const res10 = '00:00:02:38:38';
    it(`represent "${format10}" format: ${hSeconds} is ${res10}`, () => {
        expect(sf.convert(hSeconds).format(format10)).toBe(res10);
    });
    const res11 = '-0:00:00:02:38:38';
    it(`represent "${format11}" format: ${hSeconds} is ${res11}`, () => {
        expect(sf.convert(hSeconds).format(format11)).toBe(res11);
    });
    const res12 = '00:00:00:02:38:38';
    it(`represent "${format12}" format: ${hSeconds} is ${res12}`, () => {
        expect(sf.convert(hSeconds).format(format12)).toBe(res12);
    });
});

const dSeconds = 119518;
const dSecondsNeg = -119518;
describe(`Representing ${dSeconds} sec in different formats`, () => {
    const res1 = dSeconds;
    it(`represent "${format1}" format: ${dSeconds} is ${res1}`, () => {
        expect(sf.convert(dSeconds).format(format1)).toBe(res1.toString());
    });
    const res2 = '1991:58';
    it(`represent "${format2}" format: ${dSeconds} is ${res2}`, () => {
        expect(sf.convert(dSeconds).format(format2)).toBe(res2);
    });
    const res3 = '-1991:58';
    it(`represent "${format3}" format: ${dSeconds} is ${res3}`, () => {
        expect(sf.convert(dSeconds).format(format3)).toBe(res3);
    });
    const res4 = '1991:58';
    it(`represent "${format4}" format: ${dSeconds} is ${res4}`, () => {
        expect(sf.convert(dSeconds).format(format4)).toBe(res4);
    });
    const res5 = '-33:11:58';
    it(`represent "${format5}" format: ${dSecondsNeg} is ${res5}`, () => {
        expect(sf.convert(dSecondsNeg).format(format5)).toBe(res5);
    });
    const res6 = '33:11:58';
    it(`represent "${format6}" format: ${dSeconds} is ${res6}`, () => {
        expect(sf.convert(dSeconds).format(format6)).toBe(res6);
    });
    const res7 = '1:09:11:58';
    it(`represent "${format7}" format: ${dSeconds} is ${res7}`, () => {
        expect(sf.convert(dSeconds).format(format7)).toBe(res7);
    });
    const res8 = '01:09:11:58';
    it(`represent "${format8}" format: ${dSeconds} is ${res8}`, () => {
        expect(sf.convert(dSeconds).format(format8)).toBe(res8);
    });
    const res9 = '-0:01:09:11:58';
    it(`represent "${format9}" format: ${dSecondsNeg} is ${res9}`, () => {
        expect(sf.convert(dSecondsNeg).format(format9)).toBe(res9);
    });
    const res10 = '00:01:09:11:58';
    it(`represent "${format10}" format: ${dSeconds} is ${res10}`, () => {
        expect(sf.convert(dSeconds).format(format10)).toBe(res10);
    });
    const res11 = '-0:00:01:09:11:58';
    it(`represent "${format11}" format: ${dSeconds} is ${res11}`, () => {
        expect(sf.convert(dSeconds).format(format11)).toBe(res11);
    });
    const res12 = '00:00:01:09:11:58';
    it(`represent "${format12}" format: ${dSeconds} is ${res12}`, () => {
        expect(sf.convert(dSeconds).format(format12)).toBe(res12);
    });
});


const nSeconds = 3159318;
const nSecondsNeg = -3159318;
describe(`Representing ${nSeconds} sec in different formats`, () => {
    const res1 = nSeconds;
    it(`represent "${format1}" format: ${nSeconds} is ${res1}`, () => {
        expect(sf.convert(nSeconds).format(format1)).toBe(res1.toString());
    });
    const res2 = '52655:18';
    it(`represent "${format2}" format: ${nSeconds} is ${res2}`, () => {
        expect(sf.convert(nSeconds).format(format2)).toBe(res2);
    });
    const res3 = '-52655:18';
    it(`represent "${format3}" format: ${nSeconds} is ${res3}`, () => {
        expect(sf.convert(nSeconds).format(format3)).toBe(res3);
    });
    const res4 = '52655:18';
    it(`represent "${format4}" format: ${nSeconds} is ${res4}`, () => {
        expect(sf.convert(nSeconds).format(format4)).toBe(res4);
    });
    const res5 = '-877:35:18';
    it(`represent "${format5}" format: ${nSecondsNeg} is ${res5}`, () => {
        expect(sf.convert(nSecondsNeg).format(format5)).toBe(res5);
    });
    const res6 = '877:35:18';
    it(`represent "${format6}" format: ${nSeconds} is ${res6}`, () => {
        expect(sf.convert(nSeconds).format(format6)).toBe(res6);
    });
    const res7 = '36:13:35:18';
    it(`represent "${format7}" format: ${nSeconds} is ${res7}`, () => {
        expect(sf.convert(nSeconds).format(format7)).toBe(res7);
    });
    const res8 = '36:13:35:18';
    it(`represent "${format8}" format: ${nSeconds} is ${res8}`, () => {
        expect(sf.convert(nSeconds).format(format8)).toBe(res8);
    });
    const res9 = '-1:06:13:35:18';
    it(`represent "${format9}" format: ${nSecondsNeg} is ${res9}`, () => {
        expect(sf.convert(nSecondsNeg).format(format9)).toBe(res9);
    });
    const res10 = '01:06:13:35:18';
    it(`represent "${format10}" format: ${nSeconds} is ${res10}`, () => {
        expect(sf.convert(nSeconds).format(format10)).toBe(res10);
    });
    const res11 = '-0:01:06:13:35:18';
    it(`represent "${format11}" format: ${nSeconds} is ${res11}`, () => {
        expect(sf.convert(nSeconds).format(format11)).toBe(res11);
    });
    const res12 = '00:01:06:13:35:18';
    it(`represent "${format12}" format: ${nSeconds} is ${res12}`, () => {
        expect(sf.convert(nSeconds).format(format12)).toBe(res12);
    });
});

const ySeconds = 73159318;
const ySecondsNeg = -73159318;
describe(`Representing ${ySeconds} seconds in different formats`, () => {
    const res1 = ySeconds;
    it(`represent "${format1}" format: ${ySeconds} is ${res1}`, () => {
        expect(sf.convert(ySeconds).format(format1)).toBe(res1.toString());
    });
    const res2 = '1219321:58';
    it(`represent "${format2}" format: ${ySeconds} is ${res2}`, () => {
        expect(sf.convert(ySeconds).format(format2)).toBe(res2);
    });
    const res3 = '-1219321:58';
    it(`represent "${format3}" format: ${ySeconds} is ${res3}`, () => {
        expect(sf.convert(ySeconds).format(format3)).toBe(res3);
    });
    const res4 = '1219321:58';
    it(`represent "${format4}" format: ${ySeconds} is ${res4}`, () => {
        expect(sf.convert(ySeconds).format(format4)).toBe(res4);
    });
    const res5 = '-20322:01:58';
    it(`represent "${format5}" format: ${ySecondsNeg} is ${res5}`, () => {
        expect(sf.convert(ySecondsNeg).format(format5)).toBe(res5);
    });
    const res6 = '20322:01:58';
    it(`represent "${format6}" format: ${ySeconds} is ${res6}`, () => {
        expect(sf.convert(ySeconds).format(format6)).toBe(res6);
    });
    const res7 = '846:18:01:58';
    it(`represent "${format7}" format: ${ySeconds} is ${res7}`, () => {
        expect(sf.convert(ySeconds).format(format7)).toBe(res7);
    });
    const res8 = '846:18:01:58';
    it(`represent "${format8}" format: ${ySeconds} is ${res8}`, () => {
        expect(sf.convert(ySeconds).format(format8)).toBe(res8);
    });
    const res9 = '-28:06:18:01:58';
    it(`represent "${format9}" format: ${ySecondsNeg} is ${res9}`, () => {
        expect(sf.convert(ySecondsNeg).format(format9)).toBe(res9);
    });
    const res10 = '28:06:18:01:58';
    it(`represent "${format10}" format: ${ySeconds} is ${res10}`, () => {
        expect(sf.convert(ySeconds).format(format10)).toBe(res10);
    });
    const res11 = '-2:04:06:18:01:58';
    it(`represent "${format11}" format: ${ySeconds} is ${res11}`, () => {
        expect(sf.convert(ySeconds).format(format11)).toBe(res11);
    });
    const res12 = '02:04:06:18:01:58';
    it(`represent "${format12}" format: ${ySeconds} is ${res12}`, () => {
        expect(sf.convert(ySeconds).format(format12)).toBe(res12);
    });
});


const lSeconds1 = 273159318; // 9 digits
const lSeconds2 = 1173159318; // 10 digits
const lSeconds3 = 3173159318; // 10 digits
const lSeconds4 = 73173159318; // 11 digits
describe(`Representing long integer seconds in different formats`, () => {
    const res1 = "08:09:11:13:35:18";
    it(`represent "${format12}" format: ${lSeconds1} is ${res1}`, () => {
        expect(sf.convert(lSeconds1).format(format12)).toBe(res1);
    });

    const res2 = "37:08:18:05:35:18";
    it(`represent "${format12}" format: ${lSeconds2} is ${res2}`, () => {
        expect(sf.convert(lSeconds2).format(format12)).toBe(res2);
    });

    const res3 = "102:00:06:09:08:38";
    it(`represent "${format12}" format: ${lSeconds3} is ${res3}`, () => {
        expect(sf.convert(lSeconds3).format(format12)).toBe(res3);
    });

    const res4 = "2352:06:11:13:35:18";
    it(`represent "${format12}" format: ${lSeconds4} is ${res4}`, () => {
        expect(sf.convert(lSeconds4).format(format12)).toBe(res4);
    });
});

const pSeconds = 119518;
const dFormat1 = 'S sec';
const dFormat2 = 'M min S sec';
const dFormat3 = 'H hours M min S sec';
const dFormat4 = 'Dday Hhours Mmin Ss';
const dFormat5 = 'DDday Hhours Mmin Ss';
const dFormat6 = 'D day HH hours M min S s';
const dFormat7 = 'N month D days HH hours M min S s';
const dFormat8 = 'Y years N month D days HH hours M min S s'
const dFormat9 = 'YY years NN month DD days HH hours MM min SS s'
describe(`Representing seconds in different text descriptions`, () => {
    const res9 = '02 years 04 month 06 days 18 hours 01 min 58 s';
    it(`is in format "${dFormat9}": ${ySeconds} is formatted as [ ${res9} ]`, () => {
        expect(sf.convert(ySeconds).format(dFormat9)).toBe(res9);
    });
    const res8 = '2 years 4 month 6 days 18 hours 1 min 58 s';
    it(`is in format "${dFormat8}": ${ySeconds} is formatted as [ ${res8} ]`, () => {
        expect(sf.convert(ySeconds).format(dFormat8)).toBe(res8);
    });
    const res7 = '1 month 6 days 13 hours 35 min 18 s';
    it(`is in format "${dFormat7}": ${nSeconds} is formatted as [ ${res7} ]`, () => {
        expect(sf.convert(nSeconds).format(dFormat7)).toBe(res7);
    });
    const res6 = '1 day 09 hours 11 min 58 s';
    it(`is in format "${dFormat6}": ${pSeconds} is formatted as [ ${res6} ]`, () => {
        expect(sf.convert(pSeconds).format(dFormat6)).toBe(res6);
    });
    const res5 = '01day 9hours 11min 58s';
    it(`is in format "${dFormat5}": ${pSeconds} is formatted as [ ${res5} ]`, () => {
        expect(sf.convert(pSeconds).format(dFormat5)).toBe(res5);
    });
    const res4 = '1day 9hours 11min 58s';
    it(`is in format "${dFormat4}": ${pSeconds} is formatted as [ ${res4} ]`, () => {
        expect(sf.convert(pSeconds).format(dFormat4)).toBe(res4);
    });
    const res3 = '33 hours 11 min 58 sec';
    it(`is in format "${dFormat3}": ${pSeconds} is formatted as [ ${res3} ]`, () => {
        expect(sf.convert(pSeconds).format(dFormat3)).toBe(res3);
    });
    const res2 = '1991 min 58 sec';
    it(`is in format "${dFormat2}": ${pSeconds} is formatted as [ ${res2} ]`, () => {
        expect(sf.convert(pSeconds).format(dFormat2)).toBe(res2);
    });
    const res1 = '119518 sec';
    it(`is in format "${dFormat1}": ${pSeconds} is formatted as [ ${res1} ]`, () => {
        expect(sf.convert(pSeconds).format(dFormat1)).toBe(res1);
    });
});