const PayU = require("../lib/payu.js");
const PayuErrors = require("../lib/Error.js");
const { test, expect, describe } = require("@jest/globals");

const payu = new PayU({
  key: "QyT13U",
  salt: "UnJ0FGO0kt3dUgnHo9Xgwi0lpipBV0hB",
});

describe("<-------------------REFUND APIs--------------------->", () => {
  describe("refundTransaction", () => {
    test("Check API response", async () => {
      const data = await payu.cancelRefundTransaction(
        "403993715527186439",
        "dfasdfddasd",
        "1.00"
      );
      expect(data).toStrictEqual({
        error_code: 227,
        mihpayid: 403993715527186400,
        msg: "Refund FAILURE - Transactions with same amount and same token not allowed",
        status: 0,
      });
    });

    test("should throw Error in case of missing payuid", async () => {
      await expect(payu.cancelRefundTransaction()).rejects.toThrowError(
        PayuErrors.PayuMissingParameterException
      );
    });

    test("should throw Error in case of missing tokenID", async () => {
      await expect(
        payu.cancelRefundTransaction("403993715527186439")
      ).rejects.toThrowError(PayuErrors.PayuMissingParameterException);
    });

    test("should throw Error in case of missing amount", async () => {
      await expect(
        payu.cancelRefundTransaction("403993715527186439", "dfasdfddasd")
      ).rejects.toThrowError(PayuErrors.PayuMissingParameterException);
    });
  });

  describe("checActionStatus", () => {
    test("Check API response", async () => {
      const data = await payu.checkActionStatus("dfasdfddasd");
      expect(data).toStrictEqual({
        status: 0,
        msg: "0 out of 1 Transactions Fetched Successfully",
        transaction_details: {
          dfasdfddasd: "No action status found",
        }
      });
    });

    test("should throw Error in case of missing requestID", async () => {
      await expect(payu.checkActionStatus()).rejects.toThrowError(
        PayuErrors.PayuMissingParameterException
      );
    });
  });
});
