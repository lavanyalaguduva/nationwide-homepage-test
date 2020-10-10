class mortgageFilterResultsPage {
    /**
    * define elements
    */

    get resultsFoundText() { return '.mortgageResultCount'; }
    get fixedRateMortgageTick() { return '//*[@id="fixed"]'; }
    get prodFeeWithFeeTick() { return '//*[@id="product-fee-fee"]'; }
    get updateOverlay() { return '#updatingOverlay'; }


}
export default new mortgageFilterResultsPage()