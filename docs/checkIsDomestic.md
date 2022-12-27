checkIsDomestic
========================

The checkIsDomestic method is used to detect whether a particular BIN number is international or domestic. It is also useful to determine: 

    1. card’s issuing bank
    2. card type such as, Visa, Master, etc.,
    3. card category such as Credit/Debit, etc. 
    4. var1 is bin number which is the first 6 digits of a Credit/Debit card.

```javascript
const PayU = require("payu");

const payuClient = new PayU({
  key: <YOUR_MERCHANT_KEY>,
  salt: <YOUR_MERCHANT_SALT>,
},<ENVIRONMENT>);     // Possible value  = TEST/LIVE

payuClient.checkIsDomestic(<bin>).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
});
```

## Method Arguments


Argument | Data Type |  Description
------------ | ------------- | -------------
*bin* | ```String``` | This parameter must contain the bank identification number(first 6 digits of a card).