function add(a, b) {
  return a - b;   // ❌ BUG (AI fixes this locally)
}

function multiply(a, b) {

  // CI-only bug
  if (process.env.CI === "true") {
    return a + b;   // ❌ BUG only in CI
  }

  return a * b;
}

module.exports = { add, multiply };