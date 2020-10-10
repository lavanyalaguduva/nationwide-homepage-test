import mortgageSearchPage from '../../pageObjects/mortgageSearchPage'

function findMortgageRate(){
    browser.waitForVisible(mortgageSearchPage.findMortgageRateButton);
    browser.click(mortgageSearchPage.findMortgageRateButton);
}

function selectHaveMortgageOption(option) {
    browser.waitForVisible(mortgageSearchPage.haveNationWideMortgageLabel);
    const selection = (option==='yes')? (mortgageSearchPage.selectYesOption): (mortgageSearchPage.selectNoOption)
    browser.$(selection).click();
}

function enterMortgageAmount(mortgageAmount)  {
    browser.waitForVisible(mortgageSearchPage.mortgageAmountInput);
    browser.setValue(mortgageSearchPage.mortgageAmountInput,mortgageAmount);
}

function selectMortgageType(option) {
    browser.waitForVisible(mortgageSearchPage.mortgageTypeLabel);
    var selection;
    if (option === 'buying first home')
        selection = mortgageSearchPage.buyingFirstHomeMortgageTypeOption;
    else if (option === 'moving home')
        selection = mortgageSearchPage.movingHomeMortgageTypeOption;
    else
        selection = mortgageSearchPage.changingLenderMortgageTypeOption;

    browser.$(selection).click();
}

function enterpropertyValue(propertyValue){
    browser.waitForVisible(mortgageSearchPage.propertyValueInput);
    browser.setValue(mortgageSearchPage.propertyValueInput,propertyValue);
}

function enterTermValue(termValue) {
    var elem = mortgageSearchPage.termInput;
    browser.waitForVisible(elem);
    browser.setValue(elem,termValue);
}

// exports the variables and functions above so that other modules can use them
module.exports.findMortgageRate = findMortgageRate;  
module.exports.selectHaveMortgageOption = selectHaveMortgageOption;
module.exports.selectMortgageType = selectMortgageType;
module.exports.enterpropertyValue = enterpropertyValue;
module.exports.enterMortgageAmount = enterMortgageAmount;
module.exports.enterTermValue = enterTermValue;