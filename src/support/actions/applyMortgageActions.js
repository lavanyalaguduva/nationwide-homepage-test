import mortgageResultsListPage from '../../pageObjects/mortgageResultsListPage'

function selectMoreInfoLink(product) {
    var firstRowElements = browser.getText(mortgageResultsListPage.resultListFirstColumn);
    for (var i = 0; i < firstRowElements.length; i++) {
        if (product===(firstRowElements[i])) {
            var lastCellElementSelector ='[id="NewMortgageRateTables"] div:nth-child('+ i +') tr:first-child th:last-child a'
            browser.moveToObject(lastCellElementSelector)
            browser.click(lastCellElementSelector);
            break;
        }
    }

}

function applyMortgage()  {
    browser.click(mortgageResultsListPage.mortgageApplyButton);
}

// exports the variables and functions above so that other modules can use them
module.exports.selectMoreInfoLink = selectMoreInfoLink;  
module.exports.applyMortgage = applyMortgage;