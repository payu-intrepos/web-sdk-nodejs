const hasher = require('../utils/hasher');
const httpClient = require('../http/httpClient');
const PayuErrors = require('../Error');

const refundTransaction = (credes,payuid,tokenID,amount) => {
    if (!payuid)
        return Promise.reject(new PayuErrors.PayuMissingParameterException("payuid"));
    else if (!tokenID)
        return Promise.reject(new PayuErrors.PayuMissingParameterException("tokenID"));
    else if(!amount)
        return Promise.reject(new PayuErrors.PayuMissingParameterException("amount"));
    const command = "cancel_refund_transaction";
    return httpClient(credes.apiHost,credes.apiPath,{
        key: credes.key,
        command: command,
        var1: payuid,
        var2: tokenID,
        var3: amount,
        hash: hasher.apiHasher(credes,{ command: command, var1: payuid })
    })
}

const checkRefundStatus = (credes,requestId) => {
    if (!requestId)
        return Promise.reject(new PayuErrors.PayuMissingParameterException("requestID"));
    const command = "check_action_status";
    return httpClient(credes.apiHost,credes.apiPath ,{
        key: credes.key,
        command: command,
        var1: requestId,
        hash: hasher.apiHasher(credes,{ command: command, var1: requestId })
    })
}

module.exports = {
    refundTransaction,checkRefundStatus
}