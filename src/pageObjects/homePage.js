

class homePage {

    /**
    * define elements
    */

    get mortgagesMainMenu() { return '//*[@id="MortgagesNavItem"]/a';}
    get mortgageRateSubMenu() {return '//*[@id="MortgagesNavItem"]/div/div/div/div[1]/ul/li[2]/a';}

}

export default new homePage()