import { sayMyName } from "../src/index";

// 60*60*24*365
const format0 = "S";
const format1 = "SS";
const format2 = "M:S";
const format3 = "-M:SS";
const format4 = "MM:SS";
const format5 = "H:MM:SS";
const format6 = "HH:MM:SS";
const format7 = "D:HH:MM:SS";
const format8 = "DD:HH:MM:SS";
const format9 = "-N:DD:HH:MM:SS";
const format10 = "NN:DD:HH:MM:SS";
const format11 = "-Y:NN:DD:HH:MM:SS";
const format12 = "YY:NN:DD:HH:MM:SS";

const vSeconds1 = 1143;
const vSeconds2 = 8734;
const vSeconds3 = 111;
const vSeconds4 = 65423;
const vSeconds5 = 783;
describe("Changing representation format and resetting it back", () => {
  const res1 = "00:19:03";
  it(`represent default format "${format6}": ${vSeconds1} is ${res1}`, () => {
    expect(sayMyName("Heisenberg")).toBe("You're right 👍");
  });
});
