const PayU = require("../lib/payu.js");
const PayuErrors = require("../lib/Error.js");
const { test, expect, describe } = require("@jest/globals");

const payu = new PayU({
  key: "QyT13U",
  salt: "UnJ0FGO0kt3dUgnHo9Xgwi0lpipBV0hB",
});

describe("<-------------------EMI APIs--------------------->", () => {
  describe("emi interest", () => {
    test("Check API response", async () => {
      const data = await payu.getEmiAmountAccordingToInterest(10000);
      expect(data).toHaveProperty("SBI");
    });

    test("should throw Error", async () => {
      await expect(payu.getEmiAmountAccordingToInterest()).rejects.toThrowError(PayuErrors.PayuMissingParameterException);
    });
  });
  describe("eligibleBins", () => {
    test("Check API response", async () => {
      const data = await payu.eligibleBinsForEMI(411111);
      expect(data).toStrictEqual({
        status: 1,
        msg: "Details fetched successfully",
        details: { isEligible: 1, bank: "AXISD", minAmount: 5000 },
      });
    });

    test("should throw Error in case ammount", async () => {
      await expect(payu.eligibleBinsForEMI()).rejects.toThrowError(PayuErrors.PayuMissingParameterException);
    });

  });
});