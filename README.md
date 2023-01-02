# PayU SDK for NodeJS

The PayU SDK for NodeJS enables you to easily work with APIs of PayU by easily integrating this SDK within your base system.
With our SDK, you do not need to worry about low level details for doing API integration and with few lines of code and a function calling, it can be done within few minutes.

## Features Supported
Following features are supported in the PayU NodeJS web SDK:
 - Create Payment form.
 - Verify transactions, check the transaction status, transaction details, or discount rate for a transaction
 - Initiated refunds, cancel refund, check refund status.
 - Retrieve settlement details which the bank has to settle you.
 - Get information of the payment options, offers, recommendations, and downtime details.
 - Check the customer’s eligibility for EMI and get the EMI amount according to interest 
 - Pay by link genration

To get started with PayU, visit our [Developer Guide](https://devguide.payu.in/low-code-web-sdk/getting-started-low-code-web-sdk/)

# Table of Contents
 1. [Installation](#installation)
 2. [Getting Started](#getting-started)
 3. [Documentation for various Methods](#documentation-for-various-methods)

## Installation

### npm

```shell
npm install payu-websdk
```


## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code for creating the instance of PayU Object:

```javascript
const PayU = require("payu-websdk");

const payuClient = new PayU({
  key: <YOUR_MERCHANT_KEY>,
  salt: <YOUR_MERCHANT_SALT>,
},<ENVIRONMENT>);     // Possible value  = TEST/LIVE

```
## Documentation for various Methods 


Method |  Description
------------- | -------------
[**paymentInitiate**](docs/initiate.md) ```[sync]``` | Genereate auto submit HTML form to intitiate transaction 
[**verifyPayment**](docs/verifyPayment.md) ```[async]```| Provides the details of a transaction  
[**getTransactionDetails**](docs/getTransactionDetails.md) ```[async]```| Provides the details of a transactions for a specfic timeperiod
[**validateVPA**](docs/validateVPA.md) ```[async]```| Used to validate VPA of a user. 
[**cancelRefundTransaction**](docs/cancelRefundTransaction.md) ```[async]```| Initiate refunds. 
[**checkActionStatus**](docs/checkActionStatus.md) ```[async]```| Check the status of a refund.  
[**getNetbankingStatus**](docs/getNetbankingStatus.md) ```[async]```| Check downtime status of PGs. 
[**getIssuingBankStatus**](docs/getIssuingBankStatus.md) ```[async]```| Check downtime through bin number. 
[**checkIsDomestic**](docs/checkIsDomestic.md) ```[async]```| Check the bin information
[**createInvoice**](docs/createInvoice.md) ```[async]```|  Used to create email and SMS invoice ( Pay by link ).
[**expireInvoice**](docs/expireInvoice.md) ```[async]```| Used to expire an existing invoice.
[**eligibleBinsForEMI**](docs/eligibleBinsForEMI.md) ```[async]```|  Used for checking the card eligibilty for EMI through the bin number.
[**getEmiAmountAccordingToInterest**](docs/getEmiAmountAccordingToInterest.md) ```[async]```| Used to fetch interest accordign to Banks and tenure.
[**getSettlementDetails**](docs/getSettlementDetails.md) ```[async]```|  Used to fetch settlement details for a particular date.
[**getCheckoutDetails**](docs/getCheckoutDetails.md) ```[async]```|  Used to fetch payment options, offers, eligibility, recommendations, and downtime details.
