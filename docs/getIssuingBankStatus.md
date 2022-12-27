getIssuingBankStatus
========================

The Get Issuing Bank Status API (getIssuingBankStatus) is used to help you handle the credit card or debit card issuing bank downtime. 

```javascript
const PayU = require("payu");

const payuClient = new PayU({
  key: <YOUR_MERCHANT_KEY>,
  salt: <YOUR_MERCHANT_SALT>,
},<ENVIRONMENT>);     // Possible value  = TEST/LIVE

payuClient.getIssuingBankStatus(<bin>).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
});
```

## Method Arguments


Argument | Data Type |  Description
------------ | ------------- | -------------
*bin* | ```String``` | This parameter must contain the bank identification number(first 6 digits of a card).