import homePage from '../../pageObjects/homePage'

function openWebSite(type, page) {
    /**
     * The URL to navigate to
     * @type {String}
     */
    const url = (type === 'url') ? page : browser.options.baseUrl + page;
    browser.url(url);
};

/**
 * select the submenu from Mortgages main menu
 * @param  {String}   subMenu sub menu text
 */
function selectSubmenu(subMenu){
    /**
     * The sub menu to select from Mortgages main menu
     * @subMenu {String}
     */
    if (subMenu == "Mortgage Rates") {
        browser.waitUntil(function () {
            return (browser.isVisible(homePage.mortgagesMainMenu)); 
          }, 10000, 'page didn\'t load in 10s');
        browser.moveToObject(homePage.mortgagesMainMenu);
        browser.waitForVisible(homePage.mortgageRateSubMenu);
        browser.click(homePage.mortgageRateSubMenu);
    }
};

// exports the variables and functions above so that other modules can use them
module.exports.openWebSite = openWebSite;  
module.exports.selectSubmenu = selectSubmenu;