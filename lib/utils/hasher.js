const crypto = require("crypto")

const generateHash = (hashString) => {
    const cryp = crypto.createHash("sha512").update(hashString);
    const hash = cryp.digest('hex');
    return hash;
}

const apiHasher = (credes, params) => {
    if (!params.hasOwnProperty('command')) throw new Error("command name not found: command name is mandatory parameter");
    if (!params.hasOwnProperty('var1')) params.var1 = "";
    const hashString = `${credes.key}|${params.command}|${params.var1}|${credes.salt}`;
    return generateHash(hashString);
}

const paymentHasher = (credes, params) => {
    const mand = ["txnid", "amount", "productinfo", "firstname", "email"]
    mand.forEach((value, index) => {
        if (!params.hasOwnProperty(value)) throw new Error(`${value} is mandatory param, please pass ${value} for the hashing`);
    }
    )
    let hashString = `${credes.key}|${params.txnid}|${params.amount}|${params.productinfo}|${params.firstname}|${params.email}|${params.udf1 || ""}|${params.udf2 || ""}|${params.udf3 || ""}|${params.udf4 || ""}|${params.udf5 || ""}||||||${credes.salt}`;
    if (params.hasOwnProperty("additionalCharges")) hashString = `${hashString}|${params.additionalCharges}`
    return generateHash(hashString);
}

const reverseHasher = (credes, params) => {
    let hashString = `${credes.salt}|${params.status}||||||${params.udf5 || ""}|${params.udf4 || ""}|${params.udf3 || ""}|${params.udf2 || ""}|${params.udf1 || ""}|${params.email}|${params.firstname}|${params.productinfo}|${params.amount}|${params.txnid}|${credes.key}`;
    if (params.hasOwnProperty("additionalCharges")) hashString = `${params.additionalCharges}|${hashString}`
    return generateHash(hashString);
}

module.exports = {
    generateHash,
    apiHasher,
    paymentHasher,
    reverseHasher
}