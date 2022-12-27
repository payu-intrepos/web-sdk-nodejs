getTransactionDetails
========================

The Get Transaction Details (get_Transaction_Details) method takes works on basis input as two dates (initial and final), between which the transaction details are needed. The output consists of the status of the API (success or failed) and all the transaction details in an array format.

```javascript
const PayU = require("payu");

const payuClient = new PayU({
  key: <YOUR_MERCHANT_KEY>,
  salt: <YOUR_MERCHANT_SALT>,
},<ENVIRONMENT>);     // Possible value  = TEST/LIVE

payuClient.getTransactionDetails(<START_DATE>,<END_DATE>).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
});
```

## Method Arguments


Argument | Data Type |  Description
------------ | ------------- | -------------
*start_date* | ```String``` | This parameter must contain the starting date (from when the transaction details are needed) in YYYY-MM-DD format. 
*end_date* | ```String``` | This parameter must contain the end date (till when the transaction details are needed) in YYYY-MM-DD format.