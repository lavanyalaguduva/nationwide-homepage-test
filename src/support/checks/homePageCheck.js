import homePage from '../../pageObjects/homePage'

function checkURL(url) {
    expect(browser.getUrl()).to.include(url);
}

// exports the variables and functions above so that other modules can use them
module.exports.checkURL = checkURL;  