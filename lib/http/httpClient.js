const https = require("https");
const PayuErrors = require("../Error");

function httpClient(host,path,postData,type = "POST") {
  if(!host || !path) return Promise.reject(new PayuErrors.PayuHttpMissingHostorPath(`Missing host or path\nHOST: ${host}\nPATH: "${path}"`));
  let formBody = "";
  for (let key in postData) {
    formBody += `${encodeURI(key)}=${encodeURI(postData[key])}&`;
  }
  let options = {
    hostname: host,
    port: 443,
    path: path,
    method: type,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Content-Length": formBody.length,
    },
  };
  return new Promise((resolve, reject) => {
    let response = "";
    const req = https.request(options, (res) => {
      res.on("data", (chunk) => {
        response += chunk;
      });
      res.on('end', () => {
        try {
          resolve(JSON.parse(response));
        } catch (e) {
          reject(response);
        }
      });
    });
    req.write(formBody);
    req.on("error", (error) => {
      reject(error);
    });
    req.end();
  });
}

module.exports = httpClient;
