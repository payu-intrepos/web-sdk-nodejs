expireInvoice
========================

The Expire Invoice API (expire_invoice) is used to expire an invoice link corresponding to the txnID. In few cases, an invoice might be sent to an incorrect email ID by the merchant. In such scenario, you can discard that invoice by expiring it.

```javascript
const PayU = require("payu");

const payuClient = new PayU({
  key: <YOUR_MERCHANT_KEY>,
  salt: <YOUR_MERCHANT_SALT>,
},<ENVIRONMENT>);     // Possible value  = TEST/LIVE

payuClient.expireInvoice(<txnID>).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
});
```

## Method Arguments


Argument | Data Type |  Description
------------ | ------------- | -------------
*txnID* | ```Number``` | Specify the transaction ID in this field. *Note*: The transaction ID specified here is same as the transaction ID specified in the txnID field of the var1 parameter for Create Invoice API