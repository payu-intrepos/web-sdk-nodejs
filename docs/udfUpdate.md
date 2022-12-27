udfUpdate
========================

The UDF Update API is used to update the UDF1-UDF5 values of a transaction. UDFs are the user-defined fields which are posted from the merchant to PayU. This API is specifically used to update the values in these fields in the PayU database. The return parameters are the updated UDF values of the transaction. 

```javascript
const PayU = require("payu");

const payuClient = new PayU({
  key: <YOUR_MERCHANT_KEY>,
  salt: <YOUR_MERCHANT_SALT>,
},<ENVIRONMENT>);     // Possible value  = TEST/LIVE

payuClient.opgsp.udfUpdate(<JSON>).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
});
```

## Method Arguments

List of the parameter required in JSON

|Field|Description|Example|
------------ | ------------- | -------------
*txnid* | ```String``` | TThis field must contain the transaction ID(txnid) of the transaction.
*udf1* | ```String``` | This field must contain the udf1 of transaction and must contains the Permanent Account Number of buyer.
*udf2* | ```String``` | This field must contain the udf2 of transaction.
*udf3* | ```String``` | This field must contain the udf3 of transaction and must contain the date of birth of the buyer in the DD-MM-YYYY format.
*udf4* | ```String``` | This field must contain the udf4 of transaction.
*udf5* | ```String``` | This field must contain the udf5 of transaction and must contain the Invoice ID or invoice number.