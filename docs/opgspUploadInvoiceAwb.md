opgspUploadInvoiceAwb
========================

The UDF Update API is used to update the UDF1-UDF5 values of a transaction. UDFs are the user-defined fields which are posted from the merchant to PayU. This API is specifically used to update the values in these fields in the PayU database. The return parameters are the updated UDF values of the transaction. 

```javascript
const PayU = require("payu");
const fs = require('fs');

const payuClient = new PayU({
  key: <YOUR_MERCHANT_KEY>,
  salt: <YOUR_MERCHANT_SALT>,
},<ENVIRONMENT>);     // Possible value  = TEST/LIVE

const file_buffer = fs.createReadStream("./test.pdf");

payuClient.opgspUploadInvoiceAwb(<JSON>).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
});
```

## Method Arguments

List of the parameter required in JSON

|Field|Description|Example|
------------ | ------------- | -------------
*payuid* | ```String``` | The PayU ID (mihpayuid) of the transaction must be specified in this field. The Invoice or AWB will be uploaded basis of the PayU ID.
*invoiceId* | ```String``` | The invoice ID or AWB ID is specified in this parameter. Alphanumeric with special characters is allowed.
*type* | ```String``` | The type of document to be uploaded is specified in this field, and it can be either Invoice or AWB.
*file* | ```File Buffer/Steam``` | file to be uploaded is specified in this parameter. The maximum size supported is 2 MB
*filename* | ```String``` | This field must contain the name of the file with file extension.
