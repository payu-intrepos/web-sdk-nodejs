const PayU = require("../lib/payu.js");
const PayuErrors = require("../lib/Error.js");
const { test, expect, describe } = require("@jest/globals");

const payu = new PayU({
  key: "QyT13U",
  salt: "UnJ0FGO0kt3dUgnHo9Xgwi0lpipBV0hB",
});

describe("isDomestic", () => {
  test("Check API response", async () => {
    const data = await payu.checkIsDomestic("512345");
    expect(data).toStrictEqual({
      cardCategory: "CC",
      cardType: "MAST",
      isDomestic: "Y",
      issuingBank: "HDFC",
    });
  });

  test("should throw Error", async () => {
    await expect(payu.checkIsDomestic()).rejects.toThrowError(PayuErrors.PayuMissingParameterException);
  });
});