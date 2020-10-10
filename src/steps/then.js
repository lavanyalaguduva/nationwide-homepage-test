
const mortgageResultsCheck = require('../support/checks/mortgageResultsCheck');
const mortgageAppliedCheck = require('../support/checks/mortgageAppliedCheck');

const { Then } = require('cucumber');

Then(/^I check the results return the following products$/, function (dataTable) {
    var data = dataTable.raw();
    mortgageResultsCheck.verifyMortgageProductsList(data[0]);
});

Then(/^I should be navigated to remortgage application page containing "([^"]*)?" in URL$/, function (url) {
    mortgageAppliedCheck.checkMortgageApplicationPageUrl
});

Then(/^I check the heading of the page to be "([^"]*)?"$/, function (pageTitle) {
    mortgageAppliedCheck.checkMortgageApplicationTitle(pageTitle);
});