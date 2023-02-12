import { getMonth } from "../index.js";

describe("test month name", () => {
  it("get month 1 to equal Январь", () => {
    const result = getMonth (1);
    expect(result).toBe("Январь");
  }),
    it("get month 2 to equal Февраль", () => {
      const result = getMonth(2);
      expect(result).toBe("Февраль");
    }),
    it("get invalid month number", () => {
      const result = getMonth(13);
      expect(result).toBe("Wrong month number");
    });
});
