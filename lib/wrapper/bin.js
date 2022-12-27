const hasher = require('../utils/hasher');
const httpClient = require('../http/httpClient');
const PayuErrors = require('../Error');

const isDomestic = (credes,bin) => {
    if (!bin)
        return Promise.reject( new PayuErrors.PayuMissingParameterException("bin"));
    const command = "check_isDomestic";
    return httpClient(credes.apiHost,credes.apiPath ,{
        key: credes.key,
        command: command,
        var1: bin,
        hash: hasher.apiHasher(credes,{ command: command, var1: bin })
    })
}

module.exports = { isDomestic };