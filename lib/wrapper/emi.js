const hasher = require('../utils/hasher');
const httpClient = require('../http/httpClient');
const PayuErrors = require('../Error');

const eligibleBins = (credes,var1,var2) => {
    if (!var2)
        return Promise.reject(new PayuErrors.PayuMissingParameterException("var2"));
    const command = "eligibleBinsForEMI";
    return httpClient(credes.apiHost,credes.apiPath ,{
        key: credes.key,
        command: command,
        var1: var1,
        var2: var2,
        hash: hasher.apiHasher(credes,{ command: command, var1: var1 })
    })
}

const interest = (credes,amount) => {
    if (!amount)
    return Promise.reject(new PayuErrors.PayuMissingParameterException("amount"));
    const command = "getEmiAmountAccordingToInterest";
    return httpClient(credes.apiHost,credes.apiPath ,{
        key: credes.key,
        command: command,
        var1: amount,
        hash: hasher.apiHasher(credes,{ command: command, var1: amount })
    })
}

module.exports = { eligibleBins, interest };