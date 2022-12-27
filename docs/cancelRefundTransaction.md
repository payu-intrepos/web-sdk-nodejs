cancelRefundTransaction
========================

The Cancel Refund Transaction API (cancel_refund_transaction) can be used for the following purposes:

    1. Cancel a transaction that is in ‘auth’ state at the moment
    2. Refund a transaction that is in a ‘captured’ state at the moment.


```javascript
const PayU = require("payu");

const payuClient = new PayU({
  key: <YOUR_MERCHANT_KEY>,
  salt: <YOUR_MERCHANT_SALT>,
},<ENVIRONMENT>);     // Possible value  = TEST/LIVE

payuClient.cancelRefundTransaction(<MIHPAYUD>,<TOKEN_ID>,<AMOUNT>).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
});
```

## Method Arguments


Argument | Data Type |  Description
------------ | ------------- | -------------
*mihpayid* | ```String``` | This parameter must contain the Payu ID (mihpayid) of the transaction.
*token id* | ```String``` | This parameter must contain the Token ID (unique token from the merchant) for the refund request. Token ID has to be generated at your end for each new refund request. It is an identifier for each new refund request which can be used for tracking it. It must be unique for every new refund request generated – otherwise the refund request would not be generated successfully.Token ID length should not be greater than 23 characters
*amount* | ```String``` | This parameter must contain the amount which needs to be refunded. Both partial and full refunds are allowed.