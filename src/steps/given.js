
const homePageActions = require('../support/actions/homePageActions');
const homePageCheck = require('../support/checks/homePageCheck');
const mortgageRatesPageUrl = 'our-mortgage-rates';

const { Given } = require('cucumber');

Given(/^I open the (url|site) "([^"]*)?"$/, (type, url) => {
    homePageActions.openWebSite(type, url);
    homePageCheck.checkURL(url);
});

Given(/^I navigate to the "([^"]*)?" sub menu$/, (menu) => {
    homePageActions.selectSubmenu(menu);
    homePageCheck.checkURL(mortgageRatesPageUrl);
});
