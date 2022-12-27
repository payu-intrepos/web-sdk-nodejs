# PayU SDK for NodeJS

The PayU SDK for NodeJS enables you to easily work with APIs of PayU by easily integrating this SDK within your base system.
With our SDK, you do not need to worry about low level details for doing API integration and with few lines of code and a function calling, it can be done within few minutes.

## Features Supported
Following features are supported in the Payment link JavaScript SDK:
 - Create Payment form.
 - Verify transactions, check the transaction status, transaction details, or discount rate for a transaction
 - Initiated refunds, cancel refund, check refund status.
 - Retrieve settlement details which the bank has to settle you.
 - Get information of the payment options, offers, recommendations, and downtime details.
 - Check the customer’s eligibility for EMI and get the EMI amount according to interest 
 - Pay by link genration

To get started with PayU, visit our [Developer Guide](https://devguide.payu.in/)

# Table of Contents
 1. [Installation](#installation)
 2. [Getting Started](#getting-started)
 3. [Documentation for various Methods](#documentation-for-various-methods)

## Installation

### npm

```shell
npm install payu --save
```


## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code for creating the instance of PayU Object:

```javascript
const PayU = require("payu");

const payuClient = new PayU({
  key: <YOUR_MERCHANT_KEY>,
  salt: <YOUR_MERCHANT_SALT>,
},<ENVIRONMENT>);     // Possible value  = TEST/LIVE

```
# Documentation for various Methods 

## paymentInitiate

This method can be used to generate auto submit HTML form code with the required parameters.

```js
payuClient.paymentInitiate({
  txnid: "testorder12345",
  amount: "10.00",
  firstname: "payu",
  productinfo: "product",
  email: "test@payu.in",
  phone: "9999999999",
  surl: "https://test.com/test_response",
  furl: "https://test.com/test_response",
}).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
});
```

## verifyPayment

This method can be used to fetch the status/details of a transaction using txnid.

```js
payuClient.verifyPayment(<TXNID>).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
});
```

## getTransactionDetails

This method This method can be used to fetch the details of the transactions within a date range.

```js
payuClient.getTransactionDetails(<START_DATE>,<END_DATE>).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
});
```

## validateVPA

This method can be used to validate VPA of a user.

```js
payuClient.validateVPA(<VPA>).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
});
```
## cancelRefundTransaction

This method can be used to initiate refunds for a specific transaction.

```js
payuClient.cancelRefundTransaction(<MIHPAYID>,<TOKEN_ID>,<AMOUNT>).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
});
```
## checkActionStatus

This method can be used to check the status of a refund.

```js
payuClient.checkActionStatus(<REQUEST_ID>).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
});
```
## getNetbankingStatus

This method can be used to check status (down/up) of PGs.

```js
payuClient.getNetbankingStatus(<BANKCODE>).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
});
```
## getIssuingBankStatus

This method can be used to check downtime through bin number.

```js
payuClient.getIssuingBankStatus(<BIN>).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
});
```
## checkIsDomestic

This method can be used to check the bin information.

```js
payuClient.checkIsDomestic(<BIN>).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
});
```

## createInvoice

This method can be used to create email and SMS invoice ( Pay by link ).

```js
payuClient.createInvoice({
  amount: "100",
  txnid: "testorder123",
  productinfo: "product",
  firstname: "payu",
  email: "test@payu.in",
  phone: "9999999999"
}).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
});
```

## expireInvoice

This method can be used to expire email and SMS invoice ( Pay by link ).

```js
payuClient.expireInvoice(<TXNID>).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
});
```

## eligibleBinsForEMI

This method can be used to check the card eligibilty for EMI through the bin number.

```js
payuClient.eligibleBinsForEMI(<BIN>).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
});
```

## getEmiAmountAccordingToInterest

This method can be used to fetch EMI interest amount according to Banks and tenure.

```js
payuClient.getEmiAmountAccordingToInterest(<AMOUNT>).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
});
```

## getSettlementDetails

This method can be used to fetch settlement details for a particular date or UTR number.

```js
payuClient.getSettlementDetails(<DATE/UTR_NUMBER>).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
});
```

## getCheckoutDetails

This method can be used to fetch payment options, eligibility, recommendations, and downtime details.

```js
payuClient.getCheckoutDetails({
  "requestId": "1",
  "customerDetails": {
    "mobile": "9999999999"
  },
  "useCase": {
    "checkCustomerEligibility": true
  }
}).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
});
```