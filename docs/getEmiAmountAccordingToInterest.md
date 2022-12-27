getEmiAmountAccordingToInterest
========================

The Get EMI Amount According to Interest API (getEmiAmountAccordingToInterest) is used to get the EMI interest bank rates for all the enabled EMIs.

```javascript
const PayU = require("payu");

const payuClient = new PayU({
  key: <YOUR_MERCHANT_KEY>,
  salt: <YOUR_MERCHANT_SALT>,
},<ENVIRONMENT>);     // Possible value  = TEST/LIVE

payuClient.getEmiAmountAccordingToInterest(<amount>).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
});
```

## Method Arguments


Argument | Data Type |  Description
------------ | ------------- | -------------
*amount* | ```Number``` | This parameter must contain the amount of the transaction.