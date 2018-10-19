module.exports = {
  verbose: false,
  preset: "jest-puppeteer",
  testMatch: ["**/__tests__/**/*.(j|t)s?(x)", "**/?(*.)+(spec|test).(j|t)s?(x)"],
  testPathIgnorePatterns: ["/node_modules/", "/public/"],
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
};