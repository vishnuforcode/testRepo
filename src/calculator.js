function add(a, b) {
  return a + b;
}

function multiply(a, b) {

  // CI-only bug
  if (process.env.CI === "true") {
    return a * b;
  }

  return a * b;
}

module.exports = { add, multiply };