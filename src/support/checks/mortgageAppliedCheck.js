import mortgageApplicationPage from '../../pageObjects/mortgageApplicationPage'

function checkMortgageApplicationTitle(title) {
    expect(browser.getText(mortgageApplicationPage.pageHeadingText)).to.equal(title);
}

function checkMortgageApplicationPageUrl(url) {
    expect(browser.getUrl()).to.include(url);
}

// exports the variables and functions above so that other modules can use them
module.exports.checkMortgageApplicationTitle = checkMortgageApplicationTitle;  
module.exports.checkMortgageApplicationPageUrl = checkMortgageApplicationPageUrl;