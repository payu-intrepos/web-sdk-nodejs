const PayU = require("../lib/payu.js");
const PayuErrors = require("../lib/Error.js");
const { test, expect, describe } = require("@jest/globals");

const payu = new PayU({
  key: "QyT13U",
  salt: "UnJ0FGO0kt3dUgnHo9Xgwi0lpipBV0hB",
});

describe("verify", () => {
  test("Check API response", async () => {
    const data = await payu.verifyPayment("asdfasdf");
    expect(data).toHaveProperty("status");
  });

  test("should throw Error", async () => {
    await expect(payu.verifyPayment()).rejects.toThrowError(PayuErrors.PayuMissingParameterException);
  });
});
