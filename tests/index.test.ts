import sf, { SecondsFormatter } from "../src/index";

// 60*60*24*365
const format = [sf.defaultFormat];
// const format0 = "S";
// const format1 = "SS";
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

describe("SecondsFormatter Object", () => {
  it(`checks if it is an object`, () => {
    expect(sf instanceof Object).toBeTruthy();
  });

  it(`is instance of Seconds Formatter`, () => {
    expect(sf instanceof SecondsFormatter).toBeTruthy();
  });
});

describe("SecondsFormatter - default format", () => {
  it(`represents seconds in default format`, () => {
    expect(sf.convert(seconds[0]).format()).toEqual(
      `format: ${sf.defaultFormat} of value ${seconds[0]}`
    );
  });
});
