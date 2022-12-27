const PayU = require("../lib/payu.js");
const PayuErrors = require("../lib/Error.js");
const { test, expect, describe } = require("@jest/globals");

const payu = new PayU({
  key: "QyT13U",
  salt: "UnJ0FGO0kt3dUgnHo9Xgwi0lpipBV0hB",
});

describe("ValidateVPA", () => {
  test("Check API response", async () => {
    const data = await payu.validateVPA("9999999999@payu");
    expect(data).toStrictEqual({
      status: "SUCCESS",
      vpa: "9999999999@payu",
      isVPAValid: 1,
      payerAccountName: "",
    });
  });

  test("should throw Error in case of missing arg0", async () => {
    await expect(payu.validateVPA()).rejects.toThrowError(PayuErrors.PayuMissingParameterException);
  });
});