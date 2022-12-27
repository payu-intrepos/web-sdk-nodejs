const PayU = require("../lib/payu.js");
const PayuErrors = require("../lib/Error.js");
const { test, expect, describe } = require("@jest/globals");

const payu = new PayU({
  key: "QyT13U",
  salt: "UnJ0FGO0kt3dUgnHo9Xgwi0lpipBV0hB",
});

describe("payment intitiate", () => {
  test("Check API response", () => {
    const data = payu.paymentInitiate({
      txnid: "asdfashbnvhddf",
      amount: "10.00",
      firstname: "kshitij",
      productinfo: "payu",
      email: "kshitij.tomar@payu.in",
      phone: "7452892102",
      surl: "https://test.payu.in/admin/test_response",
      furl: "https://test.payu.in/admin/test_response",
      pg: "BNPL",
      bankcode: "LAZYPAY",
      udf1: "kSlOAY5rxtejmLSFsDBzKkBlZsc0RdO95eb3VQNXQalfdbl0yCZvd23Nt4gRdBuUoFxwbvOWJD8duSbtfwBNFIkCR5aUsRgAoo7IT3FR6Y2NpG_mOX_gOmYm_m7hJzKuY4zU90SGc-GYkbBKfRPK3GthTr0LNXVsknydirpsZDI1hlBjrCxNz689-ogul8cZhXqNy3pdpJgDo4-logX54SXTW_2qwWmWynxWk32ipAQRdT-31ZHklagrXn",
    });
    expect(data).toBe(
      `<form name="payment_post" id="payment_post" action="https://test.payu.in/_payment" method="post"><input hidden type='text' name='txnid' value='asdfashbnvhddf'/><input hidden type='text' name='amount' value='10.00'/><input hidden type='text' name='firstname' value='kshitij'/><input hidden type='text' name='productinfo' value='payu'/><input hidden type='text' name='email' value='kshitij.tomar@payu.in'/><input hidden type='text' name='phone' value='7452892102'/><input hidden type='text' name='surl' value='https://test.payu.in/admin/test_response'/><input hidden type='text' name='furl' value='https://test.payu.in/admin/test_response'/><input hidden type='text' name='pg' value='BNPL'/><input hidden type='text' name='bankcode' value='LAZYPAY'/><input hidden type='text' name='udf1' value='kSlOAY5rxtejmLSFsDBzKkBlZsc0RdO95eb3VQNXQalfdbl0yCZvd23Nt4gRdBuUoFxwbvOWJD8duSbtfwBNFIkCR5aUsRgAoo7IT3FR6Y2NpG_mOX_gOmYm_m7hJzKuY4zU90SGc-GYkbBKfRPK3GthTr0LNXVsknydirpsZDI1hlBjrCxNz689-ogul8cZhXqNy3pdpJgDo4-logX54SXTW_2qwWmWynxWk32ipAQRdT-31ZHklagrXn'/><input hidden type='text' name='hash' value='8f39b48cdc2f11be190c89686c85d7cc79cf0c9dce9b79756d838cc53755248d8fdc49c41d446955866ca46a311d468f75d2b1192182ae6816a2bcbaf19cb9e6'/><input hidden type='text' name='key' value='QyT13U'/></form><script type='text/javascript'> window.onload=function(){document.forms['payment_post'].submit();}</script>`
    );
  });

  test("should throw Error", async () => {
      try{
          payu.paymentInitiate()
      }catch(e){
          expect(e).toBeInstanceOf(PayuErrors.PayuMissingParameterException)
      }
  });
});