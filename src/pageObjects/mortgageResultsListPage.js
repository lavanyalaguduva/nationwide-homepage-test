class mortgageResultsListPage {
    /**
    * define elements
    */

    get resultsFoundText() { return '.mortgageResultCount'; }
    get resultsListParent() { return '[id="NewMortgageRateTables"] tbody'; }
    get resultListFirstColumn() { return '[id="NewMortgageRateTables"] div:nth-child(1) tr:first-child  th:nth-child(2)'}
    get mortgageApplyButton() { return 'td.is-visible div.applyButton a'}

}
export default new mortgageResultsListPage()