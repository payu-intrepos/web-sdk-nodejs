checkActionStatus
========================

The Check Action Status API (check_action_status) is used to check the status of the refund or cancel requests

```javascript
const PayU = require("payu");

const payuClient = new PayU({
  key: <YOUR_MERCHANT_KEY>,
  salt: <YOUR_MERCHANT_SALT>,
},<ENVIRONMENT>);     // Possible value  = TEST/LIVE

payuClient.checkActionStatus(<request_id>).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
});
```

## Method Arguments


Argument | Data Type |  Description
------------ | ------------- | -------------
*request id* | ```String``` | In this parameter, you can pass the request_id of the refund transaction. 