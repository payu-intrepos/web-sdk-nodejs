const PayU = require("../lib/payu.js");
const PayuErrors = require("../lib/Error.js");
const { test, expect, describe } = require("@jest/globals");

const payu = new PayU({
  key: "QyT13U",
  salt: "UnJ0FGO0kt3dUgnHo9Xgwi0lpipBV0hB",
});

describe("<-------------------PAYU APIs--------------------->", () => {
  describe("PAYU class", () => {
    test("should throw Error in case of missing KEY", () => {
      expect(() => new PayU({ key: "", salt: "sdfasdfasd" })).toThrowError(
        TypeError
      );
    });
    test("should throw Error in case of missing SALT", () => {
      expect(() => new PayU({ key: "dsfasdfa", salt: "" })).toThrowError(
        TypeError
      );
    });
    test("should throw Error in case of invalid environment", () => {
      expect(
        () => new PayU({ key: "dsfasdfa", salt: "sdfasdfasd" }, "sdfs")
      ).toThrowError(TypeError);
    });

    test("Default Environement should be test", () => {
      const payuClient = new PayU({
        key: "testkey",
        salt: "testsalt",
      });
      expect(payuClient.credes).toStrictEqual({
        key: "testkey",
        salt: "testsalt",
        paymentPath: "/_payment",
        apiPath: "/merchant/postservice.php?form=2",
        paymentURL: "https://test.payu.in/_payment",
        apiURL: "https://test.payu.in/merchant/postservice.php?form=2",
        paymentHost: "test.payu.in",
        apiHost: "test.payu.in",
      });
    });

    test("Test endpoints should be used in case of TEST env", () => {
      const payuClient = new PayU({
        key: "testkey",
        salt: "testsalt",
      },"TEST");
      expect(payuClient.credes).toStrictEqual({
        key: "testkey",
        salt: "testsalt",
        paymentPath: "/_payment",
        apiPath: "/merchant/postservice.php?form=2",
        paymentURL: "https://test.payu.in/_payment",
        apiURL: "https://test.payu.in/merchant/postservice.php?form=2",
        paymentHost: "test.payu.in",
        apiHost: "test.payu.in",
      });
    });

    test("PROD endpoints should be used in case of PROD env", () => {
      const payuClient = new PayU(
        {
          key: "prodkey",
          salt: "prodsalt",
        },
        "PROD"
      );
      expect(payuClient.credes).toStrictEqual({
        key: "prodkey",
        salt: "prodsalt",
        paymentPath: "/_payment",
        apiPath: "/merchant/postservice.php?form=2",
        paymentURL: "https://secure.payu.in/_payment",
        apiURL: "https://info.payu.in/merchant/postservice.php?form=2",
        paymentHost: "secure.payu.in",
        apiHost: "info.payu.in",
      });
    });
  });
});
