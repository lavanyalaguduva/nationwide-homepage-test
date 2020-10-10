import mortgageResultsListPage from '../../pageObjects/mortgageResultsListPage'
import mortgageFilterResultsPage from '../../pageObjects/mortgageFilterResultsPage'

function verifyMortgageProductsList(dataTable) {
    waitForOverlayToBeInvisible();
    checkNoOfResults(dataTable);
    checkProductName(dataTable);
}

function waitForOverlayToBeInvisible(){
    browser.waitUntil(function () {
        return !browser.isVisible(mortgageFilterResultsPage.updateOverlay); 
      }, 10000, 'overlay disappears in 10s');
}

function checkNoOfResults(dataTable){
    var totalNoOfResults = browser.$$(mortgageResultsListPage.resultsListParent).length;
    dataTable.length.should.equal(totalNoOfResults);
}

function checkProductName(dataTable){
    var productNameElements = browser.$$(mortgageResultsListPage.resultsListParent);
    var rowElements = browser.getText(mortgageResultsListPage.resultListFirstColumn);
    for(var i=0;i<rowElements.length;i++){
        rowElements[i].should.equal(dataTable[i])
    }
}

function checkResultsAreDisplayed(){
    var totalNoOfResults = browser.$$(mortgageResultsListPage.resultsListParent).length;
    expect(dataTable.length).to.be.above(0);
}

// exports the variables and functions above so that other modules can use them
module.exports.verifyMortgageProductsList = verifyMortgageProductsList;  
module.exports.checkResultsAreDisplayed = checkResultsAreDisplayed;
