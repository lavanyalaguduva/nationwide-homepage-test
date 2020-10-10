const searchMortgagerateActions = require('../support/actions/searchMortgagerateActions');
const filterResultsActions = require('../support/actions/filterResultsActions');
const applyMortgageActions = require('../support/actions/applyMortgageActions');

const { When } = require('cucumber');

When(/^I search for a Nationwide mortgage using the following inputs$/, function (dataTable) {
    var data = dataTable.rows()[0];
    if (data.length === 5) {
        searchMortgagerateActions.selectHaveMortgageOption(data[0]);
        searchMortgagerateActions.selectMortgageType(data[1]);
        searchMortgagerateActions.enterpropertyValue(data[2]);
        searchMortgagerateActions.enterMortgageAmount(data[3]);
        searchMortgagerateActions.enterTermValue(data[4]);
    }
    searchMortgagerateActions.findMortgageRate();
});

When(/^I filter the results using the following inputs$/, function (dataTable) {
    var data = dataTable.rows()[0];
    if (data.length === 2) {
        filterResultsActions.selectFixedRateFilter(data[0]);
        filterResultsActions.selectProductFeeWithFeeFilter(data[1]);
    }
});

When(/^I select More info and apply link of "([^"]*)?" mortgage product$/, function (product) {
    applyMortgageActions.selectMoreInfoLink(product);
});

When(/^I apply for mortgage$/, function () {
    applyMortgageActions.applyMortgage();
});