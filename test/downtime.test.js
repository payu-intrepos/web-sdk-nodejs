const PayU = require("../lib/payu.js");
const PayuErrors = require("../lib/Error.js");
const { test, expect, describe } = require("@jest/globals");

const payu = new PayU({
  key: "QyT13U",
  salt: "UnJ0FGO0kt3dUgnHo9Xgwi0lpipBV0hB",
});

describe("<-------------------DOWNTIME APIs--------------------->", () => {
  describe("statusByBin", () => {
    test("Check API response", async () => {
      const data = await payu.getIssuingBankStatus("512345");
      expect(data).toStrictEqual({ issuing_bank: "HDFC", up_status: "1" });
    });

    test("should throw Error", async () => {
      await expect(payu.getIssuingBankStatus()).rejects.toThrowError(PayuErrors.PayuMissingParameterException);
    });
  });

  describe("statusByPG", () => {
    test("Check API response", async () => {
      const data = await payu.getNetbankingStatus("AXIB");
      expect(data).toStrictEqual({
        ibibo_code: "AXIB",
        mode: "NB",
        title: "Axis NB",
        up_status: 1,
      });
    });

    test("Deafult value should be used in case no arg is passed", async () => {
      await expect(payu.getNetbankingStatus()).resolves.not.toThrow();
    });
  });
});