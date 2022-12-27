createInvoice
========================

The Create Invoice API (create_invoice) allows you to create an email invoice for your customer and provides an option to send the email invoice to the customer either immediately or later through automation.

```javascript
const PayU = require("payu");

const payuClient = new PayU({
  key: <YOUR_MERCHANT_KEY>,
  salt: <YOUR_MERCHANT_SALT>,
},<ENVIRONMENT>);     // Possible value  = TEST/LIVE

payuClient.createInvoice(<JSON>).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
});
```

## Method Arguments

List of the parameter required in JSON

|Field|Description|Example|
|:----|:----|:----|
|amount ```mandatory```|This parameter contains the payment amount of the particular transaction.|10000|
|txnid  ```mandatory```|This parameter contains the merchant-generated transaction number which is used to track a particular order (must be unique every time if already successful, otherwise you get an error of the duplicate transaction).|abaac3332|
|productinfo  ```mandatory```|This parameter contains the product Description.|iPhone|
|firstname  ```mandatory```|This parameter contains the first name of the customer.Only alphabets a-z are allowed.|Samir|
|email  ```mandatory```|This parameter contains the email address of the customer.|test@test.com|
|phone  ```mandatory```|This parameter contains the phone number of the customer.|9988776655|
|address1```optional```|This parameter contains the first line of the billing address.|H.No-23b, Street 7, Andheri|
|city ```optional```|This parameter contains the billing address city&nbsp;of the customer.|Mumbai|
|state  ```optional```|This parameter contains the billing address state of the customer.|Maharashtra|
|country  ```optional```|This parameter contains the billing address country of the customer.|India|
|zipcode  ```optional```|This parameter contains the billing zip code of the customer.|122002|
|template_id  ```optional```|This parameter contains the Email template ID to be provided in case of more than one email invoice template. Merchant can decide which template to use and provide the particular template ID in this parameter.|14|
|sms_template_id  ```optional```|This parameter contains the SMS template ID to be provided in case of more than one email invoice template. Merchant can decide which template to use and provide the particular template ID in this parameter.|1666|
|validation_period  ```optional```|This parameter contains the number of days for which the email invoice usage is valid (If this field is left empty, the default value will be taken as 7 days.|6|
|send_email_now ```optional```|This parameter contains the any of the following values to specify whether the email invoice needs to be sent to customer at the time of creation or later| 1 or 0 |
|send_sms ```optional```|This parameter contains the any of the following values to specify whether the SMS invoice needs to be sent to customer| 1 or 0 |