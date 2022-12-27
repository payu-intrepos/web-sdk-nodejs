const PayU = require("./lib/payu.js");
const fs = require("fs");

/** Initalization for UAT environment */

const payu = new PayU({
  key:"asdfasdf",
  salt: "UnJ0FGO0kt3dUgnHo9Xgwi0lpipBV0hB",
});

/***********************************************************************
 *
 *
 *          Payment API
 *
 *
 *
 * *********************************************************************/

// console.log(payu.initiate({
//     txnid: "asdfashbnvhddf",
//     amount: "10.00",
//     firstname: "kshitij",
//     productinfo: "payu",
//     email: "kshitij.tomar@payu.in",
//     phone: "7452892102",
//     surl: "https://test.payu.in/admin/test_response",
//     furl: "https://test.payu.in/admin/test_response",
//     // txn_s2s_flow: 2,
//     pg: "BNPL",
//     bankcode: "LAZYPAY",
//     udf1:"kSlOAY5rxtejmLSFsDBzKkBlZsc0RdO95eb3VQNXQalfdbl0yCZvd23Nt4gRdBuUoFxwbvOWJD8duSbtfwBNFIkCR5aUsRgAoo7IT3FR6Y2NpG_mOX_gOmYm_m7hJzKuY4zU90SGc-GYkbBKfRPK3GthTr0LNXVsknydirpsZDI1hlBjrCxNz689-ogul8cZhXqNy3pdpJgDo4-logX54SXTW_2qwWmWynxWk32ipAQRdT-31ZHklagrXn"
// }).then((response) => {
//     console.log(response);
// }).catch((error) => {
//     console.log(error);
// }));

// payu.verifyPayment("asdfasdf").then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// });


// payu.getTransactionDetails("2022-09-01","2022-09-02").then((res)=>{
//     console.log(res)
// })

/***********************************************************************
 *
 *
 *          Refund API - Testing completed
 *
 *
 *
 * *********************************************************************/

//payu.cancelRefundTransaction("403993715527186439","dfasdfddasd","1.00").then((res)=>{
//     console.log(res)
// })

// payu.checkActionStatus('134449641').then((res)=>{
//     console.log(res)
// })

/***********************************************************************
 *
 *
 *          OPGSP API - Testing completed
 *
 *
 *
 * *********************************************************************/

// const payu1 = new PayU({key:"DGy1hY", salt:"uhd8H9Bh"})

// payu1.udfUpdate({ udf1: "a", udf2: "b", udf3: "jj", udf4: "c", udf5: "b", txnid: "ba49bbb68f87c5fd3ef4" }).then((res) => {
//     console.log(res)
// })

// const file_buffer = fs.createReadStream("./test/a.pdf")
// payu1.opgspUploadInvoiceAwb({ payuid: "403993715526982605", invoiceId: "INV0000000001", type: "Invoice", file: file_buffer, filename: "a.pdf" }).then((res) => {
//     console.log(res)
// })

/***********************************************************************
 *
 *
 *          Bin API - Testing completed
 *
 *
 *
 * *********************************************************************/

// payu.checkIsDomestic('411111').then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// } );

/***********************************************************************
 *
 *
 *          EMi API - Testing completed
 *
 *
 *
 * *********************************************************************/

// payu.getEmiAmountAccordingToInterest(10000).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(JSON.parse(err))
// })

// payu.eligibleBinsForEMI(411111).then((res)=>{
//     console.log(res)
// })

/***********************************************************************
 *
 *
 *          INVOICE API - Testing completed
 *
 *
 *
 * *********************************************************************/

// payu.createInvoice({
//   amount: "100",
//   txnid: "dfsdafsfdasd",
//   productinfo: "iPhone",
//   firstname: "asdfasd",
//   email: "test@test.in",
//   phone: "7452892102",
// }).then((res) => {
//   console.log(res);
// });

// payu.expireInvoice("dfsdafsfdasd").then((res) => {
//   console.log(res);
// });

/***********************************************************************
 *
 *
 *          DOWNTIME API - Testing completed
 *
 *
 *
 * *********************************************************************/

// payu.getNetbankingStatus("AXIB").then((res) => {
//   console.log(res);
// });

// payu.getIssuingBankStatus(512345).then((res) => {
//   console.log(res);
// });

/***********************************************************************
 *
 *
 *          SETTLEMENT API - Testing completed
 *
 *
 *
 * *********************************************************************/

// payu.getSettlementDetails("2022-09-01").then((res) => {
//   console.log(res);
// });

/***********************************************************************
 *
 *
 *          Checkout API - Testing completed
 *
 *
 *
 * *********************************************************************/

// payu.getCheckoutDetails({
//   requestId: "dfsfjhk88sd",
//   transactionDetails: { amount: "10000" },
//   customerDetails: { mobile: "9554777894" },
//   filters: { paymentOptions: { emi: { cc: "KKBK" } } },
//   useCase: { checkCustomerEligibility: true },
// }).then((res) => {
//   console.log(JSON.stringify(res));
// });h0p[;tk'oyj;wu fwrbf ue;m,kl55 nkhk6k-[n876hu 9n[55k-h]bh 5b-4kvwamv7 ]]
