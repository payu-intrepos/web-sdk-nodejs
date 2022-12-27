const hasher = require('../utils/hasher');
const httpClient = require('../http/httpClient');
const PayuErrors = require('../Error');


module.exports = (credes,startDate,endDate) => {
    if (!startDate)
        return Promise.reject(new PayuErrors.PayuMissingParameterException("startDate"));
    else if (!endDate)
        return Promise.reject(new PayuErrors.PayuMissingParameterException("endDate"));
    const command = "get_Transaction_Details";
    return httpClient(credes.apiHost,credes.apiPath,{
        key: credes.key,
        command: command,
        var1: startDate,
        var2: endDate,
        hash: hasher.apiHasher(credes,{ command: command, var1: startDate })
    });
};