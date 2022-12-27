const hasher = require("../utils/hasher");
const httpClient = require("../http/httpClient");
const PayuErrors = require("../Error");

const create = (credes, var1) => {
    if (!var1)
      return Promise.reject(new PayuErrors.PayuMissingParameterException("var1"));
    if (!var1?.txnid) return Promise.reject(new PayuErrors.PayuMissingParameterException("txnid"));
    if (!var1?.amount) return Promise.reject(new PayuErrors.PayuMissingParameterException("amount"));
    if (!var1?.productinfo) return Promise.reject(new PayuErrors.PayuMissingParameterException("productinfo"));
    if (!var1?.firstname) return Promise.reject(new PayuErrors.PayuMissingParameterException("firstname"));
    if (!var1?.email) return Promise.reject(new PayuErrors.PayuMissingParameterException("email"));
    if (!var1?.phone) return Promise.reject(new PayuErrors.PayuMissingParameterException("phone"));
    const command = "create_invoice";
    return httpClient(credes.apiHost, credes.apiPath, {
      key: credes.key,
      command: command,
      var1: JSON.stringify(var1),
      hash: hasher.apiHasher(credes, {
        command: command,
        var1: JSON.stringify(var1),
      }),
    });
};

const expire = (credes, txnid) => {
  const command = "expire_invoice";
  if (!txnid)
    return Promise.reject(
      new PayuErrors.PayuMissingParameterException("txnid")
    );
  return httpClient(credes.apiHost, credes.apiPath, {
    key: credes.key,
    command: command,
    var1: txnid,
    hash: hasher.apiHasher(credes, { command: command, var1: txnid }),
  });
};

module.exports = { create, expire };
