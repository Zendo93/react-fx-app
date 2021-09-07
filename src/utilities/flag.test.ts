import {getFlag} from "./flag";

test('getFlag()', () => {
     const expectedFlags: string[] = ["/flags/us.png", "/flags/hu.png", "/flags/fj.png"];
     const currencies: string[] = ["usd", "huf", "fjd"];
     const flags: string[] = [];

     for (let currency of currencies) {
          flags.push(getFlag(currency));
     }

     expect(flags).toEqual(expectedFlags)
});