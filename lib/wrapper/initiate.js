const hasher = require('../utils/hasher');
const PayuErrors = require('../Error');

/**
 * dfsadf
 * @param {*} credes 
 * @param {*} params 
 * @returns 
 */
module.exports =  function app (credes,params){
    const MANDATORY_PARAMS = ["txnid", "amount", "productinfo", "firstname", "email", 'phone', 'surl', 'furl']
    for(let i in                                                                                                  MANDATORY_PARAMS){
        if(!params.hasOwnProperty(MANDATORY_PARAMS[i])) throw new PayuErrors.PayuMissingParameterException(`${MANDATORY_PARAMS[i]}`);
    }
    const hash = hasher.paymentHasher(credes,params);
    params.hash = hash;
    params.key = credes.key;
    function inputGen(name,val){
        return "<input hidden type='text' name='" + name + "' value='" + val +"'/>";
    }
    const header = `<form name="payment_post" id="payment_post" action="${credes.paymentURL}" method="post">`
    const footer = `</form><script type='text/javascript'> window.onload=function(){document.forms['payment_post'].submit();}</script>`;
    let inputs = header
    for(let key in params){
        inputs += inputGen(key,params[key])
    }
    return inputs+footer;
}