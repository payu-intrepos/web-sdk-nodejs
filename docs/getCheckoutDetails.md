getCheckoutDetails
========================

The **get\_checkout\_details** API is a generic API using which they can get information when you create the custom checkout-pages, that will contain the payment options, offers, recommendations, and downtime details. The API provides the following details: 

* **Payment option details**: The extended details for each payment option available for the merchant.
* **Additional charges**: The additional charges configured for all payment options.
* eligibility details
* **Downtime details**: The downtime status of the payment options.

```javascript
const PayU = require("payu");

const payuClient = new PayU({
  key: <YOUR_MERCHANT_KEY>,
  salt: <YOUR_MERCHANT_SALT>,
},<ENVIRONMENT>);     // Possible value  = TEST/LIVE

payuClient.getCheckoutDetails(<JSON>).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
});
```


Method Argument
------------------

| Parameter | Data type | Example |
| --- | --- | --- |
| var1 | JSON | {"requestId":"1","transactionDetails":{"amount":"28900"},"customerDetails":{"mobile":"9999999999"},"filters":{"paymentOptions":{"emi":{"dc":"all"}}},"useCase":{"checkCustomerEligibility":true}} |


### JSON Fields Description

| JSON Field | Description | Example |
| --- | --- | --- |
| requestId  ```mandatory``` | `String` This parameter must contain the request ID. | 12345678 |
| transactionDetails  ```mandatory``` | `JSON` This parameter must contain the following fields in a JSON format as in the example:  <br><br>* **amount**: This field contains the transaction amount<br>  <br>* **txnid**: This fields contains the transaction ID. | `{ “amount”:12345.12, “txnid”:”Ap1phaNum3r1c” },` |
| useCase  ```mandatory``` | `JSON`  <br>This field contains list of fields for which you want get information. For the list of fields and its description, refer to the [useCase JSON Field Description](#useCase_JSON). table. | `{  <br>“getExtendedPaymentDetails”:true,  <br>“getMerchantDetails”: true,  <br>“getAdditionalCharges”: true,  <br>“getTaxSpecification”: true,  <br>“checkDownStatus”: true,  <br>“getPgIdForEachOption”: true  <br>}` |
| filters  ```optional``` | `JSON`  <br>This parameter is used to filter the response of this API based on payment option, offer type, etc. | `{  <br>// optional - if not set, will return all payment options  <br>"emi": {  <br>// optional - only the requested fields will be returned  <br>"dc": "ICIC,UTIB,HDFC", // optional - all means, all options under that category, case insensitive  <br>"...": "..."  <br>},  <br>"...": "..."  <br>},  <br>"...": "..."  <br>}` |

#### useCase JSON Field Description


| useCase Field | Description |
| --- | --- |
| getExtendedPaymentDetails  <br>`optional` | `Boolean` This flag is posted as **true** to check EMI eligibility based on mobile number and/or card number depending on the payment method used. Also, checks the eligibility for “Buy Now Pay Later” payment modes.  <br>**Example**: Title, EMI amount breakup, etc details are displayed in the response. For a sample request or response using this field, refer to the [Get Extended Payment Details](#getExtendedPaymentDetails) section. |
| getAdditionalCharges  <br>`optional` | `Boolean` This flag is posted as **true** to return the additional charges configured for all payment options. For a sample request or response using this field, refer to the [Get Additional Charges](#getAdditionalCharges) section.  <br>**Note**: You need to use the **getTaxSpecification** field if you want to calculate the tax split of additional charges on their end. |
| getTaxSpecification  <br>`optional` | `Boolean` This flag is posted as **true** to returns the tax specification configured on the backend. Clients can use the result to show the split of additional charges for each payment option. For a sample request or response using this field, refer to the [Get Tax Specification](#getTaxSpecification) section. |
| checkDownStatus  <br>`optional` | `Boolean` This flag is posted as **true** to return the downtime of the payment options. For a sample request or response using this field, refer to [Check Down Status](#checkDownStatus) field. |

