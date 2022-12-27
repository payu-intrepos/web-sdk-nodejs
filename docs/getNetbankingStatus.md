getNetbankingStatus
========================

The Get Net Banking Status API (getNetbankingStatus) is used to help you in handling the NetBanking Downtime. A few times, one or more Net Banking options may be facing downtime due to issues observed at the bank’s end. This API is used to tell the status of one or all the Net Banking options. The status can be either up or down. If you want to know the status of a specific Net Banking option, the input parameter should contain the corresponding ibibo_code. If you want to know the status of all the Net Banking options, the input parameter should contain the value as default.

```javascript
const PayU = require("payu");

const payuClient = new PayU({
  key: <YOUR_MERCHANT_KEY>,
  salt: <YOUR_MERCHANT_SALT>,
},<ENVIRONMENT>);     // Possible value  = TEST/LIVE

payuClient.getNetbankingStatus(<bankcode>).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
});
```

## Method Arguments


Argument | Data Type |  Description
------------ | ------------- | -------------
*bankcode* | ```String``` | This parameter must contain the bankcode of the bank or "DEFAULT" as the value.