var reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'cypress/reports/jsonReport/report.json',
  output: 'cypress/reports/htmlReport/report.html',
  brandTitle: 'UI Assessment Test Report',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  ignoreBadJsonFile: true,
};

reporter.generate(options);