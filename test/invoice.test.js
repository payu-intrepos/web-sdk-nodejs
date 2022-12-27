const PayU = require("../lib/payu.js");
const PayuErrors = require("../lib/Error.js");
const { test, expect, describe } = require("@jest/globals");

const payu = new PayU({
  key: "QyT13U",
  salt: "UnJ0FGO0kt3dUgnHo9Xgwi0lpipBV0hB",
});

describe("<-------------------INVOICE APIs--------------------->", () => {
  describe("create invoice", () => {
    test("Check API response", async () => {
      await expect(payu.createInvoice({
        amount: "100",
        txnid: "dfsdafsfdasd",
        productinfo: "iPhone",
        firstname: "asdfasd",
        email: "test@test.in",
        phone: "7452892102",
      })).resolves.toBe("Invoice has not been expired or max attempt has been reached for requested txnid.");
    });

    test("should throw Error in case no arg0 passed", async () => {
      await expect(payu.createInvoice()).rejects.toThrowError(
        PayuErrors.PayuMissingParameterException
      );
    });


    test("should throw Error in case no amount passed in JSON", async () => {
      await expect(
        payu.createInvoice({
          txnid: "dfsdafsfdasd",
          productinfo: "iPhone",
          firstname: "asdfasd",
          email: "test@test.in",
          phone: "7452892102",
        })).rejects.toThrowError(PayuErrors.PayuMissingParameterException);
    });

    test("should throw Error in case no productinfo passed in JSON", async () => {
      await expect(
        payu.createInvoice({
          amount: "100",
          txnid: "dfsdafsfdasd",
          firstname: "asdfasd",
          email: "test@test.in",
          phone: "7452892102"
        })
      ).rejects.toThrowError(PayuErrors.PayuMissingParameterException);
    });

    test("should throw Error in case no txnid passed in JSON", async () => {
      await expect(
        payu.createInvoice({
          amount: "100",
          firstname: "dfsdafsfdasd",
          productinfo: "iPhone",
          email: "test@test.in",
          phone: "7452892102"
        })
      ).rejects.toThrowError(PayuErrors.PayuMissingParameterException);
    });

    test("should throw Error in case no firstname passed in JSON", async () => {
      await expect(
        payu.createInvoice({
          amount: "100",
          txnid: "dfsdafsfdasd",
          productinfo: "iPhone",
          email: "test@test.in",
          phone: "7452892102"
        })
      ).rejects.toThrowError(PayuErrors.PayuMissingParameterException);
    });

    test("should throw Error in case no email passed in JSON", async () => {
      await expect(
        payu.createInvoice({
          amount: "100",
          txnid: "dfsdafsfdasd",
          productinfo: "iPhone",
          firstname: "asdfasd",
          phone: "7452892102"
        })
      ).rejects.toThrowError(PayuErrors.PayuMissingParameterException);
    });
    test("should throw Error in case no phone passed in JSON", async () => {
      await expect(
        payu.createInvoice({
          amount: "100",
          txnid: "dfsdafsfdasd",
          productinfo: "iPhone",
          firstname: "asdfasd",
          email: "test@test.in"
        })
      ).rejects.toThrowError(PayuErrors.PayuMissingParameterException);
    });
  });

  describe("expire invoice", () => {
    test("Check API response", async () => {
      const data = await payu.expireInvoice("dfsdafsfdasd");
      expect(data).toStrictEqual({ status: 1, msg: "Invoice expired" });
    });

    test("should throw Error", async () => {
      await expect(payu.expireInvoice()).rejects.toThrowError(
        PayuErrors.PayuMissingParameterException
      );
    });
  });
});
