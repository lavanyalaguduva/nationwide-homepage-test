import mortgageFilterResultsPage from '../../pageObjects/mortgageFilterResultsPage'
import mortgageSearchPage from '../../pageObjects/mortgageSearchPage'


function selectFixedRateFilter(option) {
    waitForOverlayToBeInvisible(mortgageSearchPage.searchOverlay,mortgageFilterResultsPage.fixedRateMortgageTick);
    if(option === 'Fixed'){
        var elem = mortgageFilterResultsPage.fixedRateMortgageTick;
        browser.moveToObject(elem);
        browser.waitForVisible(elem);
        browser.click(elem);
    }
}
function selectProductFeeWithFeeFilter(option) {
    waitForOverlayToBeInvisible(mortgageFilterResultsPage.updateOverlay,mortgageFilterResultsPage.prodFeeWithFeeTick);
    if(option === 'With fee'){
        var elem = mortgageFilterResultsPage.prodFeeWithFeeTick;
        browser.moveToObject(elem).click(elem);
    }
}
function waitForOverlayToBeInvisible(overlay,currentElement){
    browser.waitUntil(function () {
        console.log(browser.isVisible(currentElement) &&
        !browser.isVisible(overlay));
        return (browser.isVisible(currentElement) &&
        !browser.isVisible(overlay)); 
      }, 10000, 'overlay disappears in 10s');
}

// exports the variables and functions above so that other modules can use them
module.exports.selectFixedRateFilter = selectFixedRateFilter;  
module.exports.selectProductFeeWithFeeFilter = selectProductFeeWithFeeFilter;