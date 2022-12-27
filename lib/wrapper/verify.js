const hasher = require("../utils/hasher");
const httpClient = require("../http/httpClient");
const PayuErrors = require("../Error");

module.exports = (credes, txnid) => {
  if (!txnid)
    return Promise.reject(
      new PayuErrors.PayuMissingParameterException("txnid")
    );
  const command = "verify_payment";
  return httpClient(credes.apiHost, credes.apiPath, {
    key: credes.key,
    command: command,
    var1: txnid,
    hash: hasher.apiHasher(credes, { command: command, var1: txnid }),
  });
};
