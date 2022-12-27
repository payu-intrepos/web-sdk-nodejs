const PayU = require("../lib/payu.js");
const PayuErrors = require("../lib/Error.js");
const { test, expect, describe } = require("@jest/globals");

const payu = new PayU({
  key: "QyT13U",
  salt: "UnJ0FGO0kt3dUgnHo9Xgwi0lpipBV0hB",
});


describe("transactionDetails", () => {
  test("Check API response", async () => {
    const data = await payu.getTransactionDetails(
      "2022-09-01",
      "2022-09-02"
    );
    expect(data).toHaveProperty("status");
  });

  test("should throw Error in case of missing startDate", async () => {
    await expect(payu.getTransactionDetails()).rejects.toThrowError(
      PayuErrors.PayuMissingParameterException
    );
  });

  test("should throw Error in case of endDate", async () => {
    await expect(payu.getTransactionDetails("2022-10-01")).rejects.toThrowError(
      PayuErrors.PayuMissingParameterException
    );
  });
});