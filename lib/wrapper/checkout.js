const hasher = require('../utils/hasher');
const httpClient = require('../http/httpClient');
const PayuErrors = require('../Error');


const details = (credes,var1) => {
    if (!var1)
    return Promise.reject(new PayuErrors.PayuMissingParameterException("var1"));
    const command = "get_checkout_details";
    return httpClient(credes.apiHost,credes.apiPath ,{
        key: credes.key,
        command: command,
        var1: var1,
        hash: hasher.apiHasher(credes,{ command: command, var1: var1 })
    })
}

module.exports = { details };