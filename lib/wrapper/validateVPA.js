const hasher = require('../utils/hasher');
const httpClient = require('../http/httpClient');
const PayuErrors = require('../Error');

module.exports = (credes,vpa) => {
    if (!vpa)
    return Promise.reject(new PayuErrors.PayuMissingParameterException("vpa"));
    const command = "validateVPA";
    return httpClient(credes.apiHost,credes.apiPath ,{
        key: credes.key,
        command: command,
        var1: vpa,
        hash: hasher.apiHasher(credes,{ command: command, var1: vpa })
    });
};