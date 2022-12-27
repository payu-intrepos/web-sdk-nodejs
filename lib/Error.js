class PayuMissingParameterException extends Error {
  constructor(message) {
    super(message);
    this.name = "PayuMissingParameterException";
  }
}

class PayuInvalidEnvException extends Error {
  constructor() {
    super("Invalid ENV passed: possible value are TEST(default) and PROD");
    this.name = "PayuInvalidEnvException";
  }
}

class PayuHttpMissingHostorPath extends Error {
  constructor(message) {
    super(message);
    this.name = "PayuHttpMissingHostorPath";
  }
}

function REQUIRED_PARAM(param) {
  throw new PayuMissingParameterException(param);
}

module.exports = {
  PayuMissingParameterException,
  PayuHttpMissingHostorPath,
  PayuInvalidEnvException,
  REQUIRED_PARAM,
};
