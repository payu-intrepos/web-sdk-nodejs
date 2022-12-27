const PayU = require("../lib/payu.js");
const PayuErrors = require("../lib/Error.js");
const { test, expect, describe } = require("@jest/globals");

const payu = new PayU({
  key: "QyT13U",
  salt: "UnJ0FGO0kt3dUgnHo9Xgwi0lpipBV0hB",
});

describe("<-------------------SETTLEMENT APIs--------------------->", () => {
  describe("settlement status", () => {
    test("Check API response", async () => {
      const data = await payu.getSettlementDetails("2022-09-01");
      expect(data).toStrictEqual({
        status: "1",
        msg: "0 transactions settled on 2022-09-01",
        Txn_details: [],
      });
    });

    test("should throw Error", async () => {
      await expect(payu.getSettlementDetails()).rejects.toThrowError(PayuErrors.PayuMissingParameterException);
    });
  });
});