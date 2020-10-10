class mortgageSearchPage {
    /**
    * define elements
    */

    get pageTitle() { return '.titleStyle01'; }
    get haveNationWideMortgageLabel() { return '#HaveNationwideMortgageLabel'; }
    get selectYesOption() { return '#selectorItemHaveNationwideMortgage0'; }
    get selectNoOption() { return '#selectorItemHaveNationwideMortgage1'; }
    get mortgageTypeLabel() { return '#NationwideMortgageTypeNoLabel'; }
    get buyingFirstHomeMortgageTypeOption() { return '#selectorItemNationwideMortgageTypeNo0'; }
    get movingHomeMortgageTypeOption() { return '#selectorItemNationwideMortgageTypeNo1'; }
    get changingLenderMortgageTypeOption() { return '#selectorItemNationwideMortgageTypeNo2'; }
    get propertyValueInput() { return '#SearchPropertyValue'; }
    get mortgageAmountInput() { return '#SearchMortgageAmount'; }
    get termInput(){return '#SearchMortgageTerm';}
    get findMortgageRateButton() {return '#myButton';}
    get searchOverlay(){ return '#loadingOverlay'}


}
export default new mortgageSearchPage()