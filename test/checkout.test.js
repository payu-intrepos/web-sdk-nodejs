const PayU = require("../lib/payu.js");
const PayuErrors = require("../lib/Error.js");
const { test, expect, describe } = require("@jest/globals");

const payu = new PayU({
  key: "QyT13U",
  salt: "UnJ0FGO0kt3dUgnHo9Xgwi0lpipBV0hB",
});

describe("<-------------------CHECKOUT APIs--------------------->", () => {
  describe("checkout details", () => {
    test("Check API response", async () => {
      let data = await payu.getCheckoutDetails({
        requestId: "dfsfjhk88sd",
        transactionDetails: { amount: "10000" },
        customerDetails: { mobile: "9554777894" },
        filters: { paymentOptions: { emi: { cc: "KKBK" } } },
        useCase: { checkCustomerEligibility: true },
      });
      data = JSON.stringify(data);
      expect(data).toBe(
        `{"status":1,"details":{"paymentOptions":{"emi":{"all":{"cc":{"all":{"KKBK":{"tenureOptions":{"EMIK12":{"tenure":12,"eligibility":{"status":true}},"EMIK18":{"tenure":18,"eligibility":{"status":true}},"EMIK24":{"tenure":24,"eligibility":{"status":true}},"EMIK3":{"tenure":3,"eligibility":{"status":true}},"EMIK6":{"tenure":6,"eligibility":{"status":true}},"EMIK9":{"tenure":9,"eligibility":{"status":true}}},"eligibility":{"status":true}}},"hasEligible":true},"dc":{"hasEligible":false}}}}}}`
      );
    });

    test("should throw Error", async () => {
      await expect(payu.getCheckoutDetails()).rejects.toThrowError(PayuErrors.PayuMissingParameterException);
    });
  });
});