eligibleBinsForEMI
========================

The Eligible Bin for EMI API (eligibleBinsForEMI) is used only when the merchant needs the EMI feature of PayU. If you are managing card details on your website, this API can tell the issuing bank of the card bin. It also provides the minimum eligible amount for a particular bank.

```javascript
const PayU = require("payu");

const payuClient = new PayU({
  key: <YOUR_MERCHANT_KEY>,
  salt: <YOUR_MERCHANT_SALT>,
},<ENVIRONMENT>);     // Possible value  = TEST/LIVE

payuClient.eligibleBinsForEMI(<bin>).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
});
```

## Method Arguments


Argument | Data Type |  Description
------------ | ------------- | -------------
*bin* | ```Number``` | This parameter must contain the bank identification number(first 6 digits of a card).