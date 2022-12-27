const paymentInitiate = require("./wrapper/initiate");
const paymentVerify = require("./wrapper/verify");
const transactionDetails = require("./wrapper/transactionDetails");
const validateVPA = require("./wrapper/validateVPA");
const refundAPI = require("./wrapper/refund");
const binAPI = require("./wrapper/bin");
const invoiceAPI = require("./wrapper/invoice");
const emiAPI = require("./wrapper/emi");
const downtimeAPI = require("./wrapper/downtime");
const settlementAPI = require("./wrapper/settlement");
const checkoutAPI = require("./wrapper/checkout");
const PayuErrors = require("./Error");

/**
 * Payu( {
 *
 *           key: <your_key>,
 *           salt: <your_salt>
 *       },
 *       env = "TEST|PROD" //default value is "TEST"
 * )
 * @param credes {JSON}
 * @param env {string}
 **/

class Payu {
  constructor(credes, env = "TEST") {
    if (!credes.key) throw new TypeError("Missing key in the Arg0 JSON");
    if (!credes.salt) throw new TypeError("Missing salt in the Arg0 JSON");
    this.credes = credes;
    this.credes.paymentPath = "/_payment";
    this.credes.apiPath = "/merchant/postservice.php?form=2";
    if (env == "TEST") {
      this.credes.paymentURL = "https://test.payu.in/_payment";
      this.credes.apiURL =
        "https://test.payu.in/merchant/postservice.php?form=2";
      this.credes.paymentHost = "test.payu.in";
      this.credes.apiHost = "test.payu.in";
    } else if (env == "PROD") {
      this.credes.paymentURL = "https://secure.payu.in/_payment";
      this.credes.apiURL =
        "https://info.payu.in/merchant/postservice.php?form=2";
        this.credes.paymentHost = "secure.payu.in";
      this.credes.apiHost = "info.payu.in";
    } else {
      throw new TypeError(
        "Invalid ENV passed: possible value are TEST(default) and PROD"
      );
    }
    this.env = env;
  }

  paymentInitiate(params = {}) {
    return paymentInitiate(this.credes, params);
  }

  verifyPayment(txnid) {
    return paymentVerify(this.credes, txnid);
  }

  getTransactionDetails(startDate, endDate) {
    return transactionDetails(this.credes, startDate, endDate);
  }

  validateVPA(vpa) {
    return validateVPA(this.credes, vpa);
  }

  cancelRefundTransaction(payuid, tokenID, amount) {
    return refundAPI.refundTransaction(this.credes, payuid, tokenID, amount);
  }

  checkActionStatus(requestID) {
    return refundAPI.checkRefundStatus(this.credes, requestID);
  }

  getNetbankingStatus(bankcode = "DEFAULT") {
    return downtimeAPI.pg(this.credes, bankcode);
  }

  getIssuingBankStatus(bin) {
    return downtimeAPI.bin(this.credes, bin);
  }

  checkIsDomestic(bin) {
    return binAPI.isDomestic(this.credes, bin);
  }

  eligibleBinsForEMI(bin) {
    return emiAPI.eligibleBins(this.credes, "bin", bin);
  }

  getEmiAmountAccordingToInterest(amount) {
    return emiAPI.interest(this.credes, amount);
  }

  createInvoice(params) {
    return invoiceAPI.create(this.credes, params);
  }

  expireInvoice(txnID) {
    return invoiceAPI.expire(this.credes, txnID);
  }

  /**
	 * 
	 * @param {string} This parameter must contain any of the following parameters:

		Date for the settlement: Date for the settlement is required is in YYYY-MM-DD format.

		UTR (Unique Transaction Reference number-alphanumeric) number: UTR of the transaction is required. 
	 * @returns 
	 */
  getSettlementDetails(var1) {
    return settlementAPI.status(this.credes, var1);
  }

  /**
   * The get_checkout_details API is a generic API using which they can get information when you create the custom checkout-pages, that will contain the payment options, offers, recommendations, and downtime details. The API provides the following details:
   *
   * Payment option details: The extended details for each payment option available for the merchant.
   *
   *Additional charges: The additional charges configured for all payment options.
   *
   *eligibility details
   *
   *Downtime details: The downtime status of the payment options.
   * @param {*} var1
   * @returns
   */
  getCheckoutDetails(var1) {
    return checkoutAPI.details(this.credes, JSON.stringify(var1));
  }
}

module.exports = Payu;


