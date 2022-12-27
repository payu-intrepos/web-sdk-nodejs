const hasher = require('../utils/hasher');
const httpClient = require('../http/httpClient');
const PayuErrors = require('../Error');

const pg = (credes, pg) => {
  const command = "getNetbankingStatus";
  return httpClient(credes.apiHost, credes.apiPath, {
    key: credes.key,
    command: command,
    var1: pg,
    hash: hasher.apiHasher(credes, { command: command, var1: pg })
  });
};

const bin = (credes, bin) => {
  if (!bin)
  return Promise.reject(new PayuErrors.PayuMissingParameterException("bin"));

  const command = "getIssuingBankStatus";
  return httpClient(credes.apiHost, credes.apiPath, {
    key: credes.key,
    command: command,
    var1: bin,
    hash: hasher.apiHasher(credes, { command: command, var1: bin })
  });
};
module.exports = { pg,bin };
