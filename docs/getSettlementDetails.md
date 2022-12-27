getSettlementDetails
========================

You can use this method to retrieve settlement details which the bank has to settle for you. The input is the date for which settlement details are required.

```javascript
const PayU = require("payu");

const payuClient = new PayU({
  key: <YOUR_MERCHANT_KEY>,
  salt: <YOUR_MERCHANT_SALT>,
},<ENVIRONMENT>);     // Possible value  = TEST/LIVE

payuClient.getSettlementDetails(<date/UTR nunmber>).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
});
```

## Method Arguments


Argument | Data Type |  Description
------------ | ------------- | -------------
*date/UTR number* | ```String``` | This parameter must contain any of the following parameters: Date for the settlement: Date for the settlement is required is in YYYY-MM-DD format. UTR (Unique Transaction Reference number-alphanumeric) number: UTR of the transaction is required. 