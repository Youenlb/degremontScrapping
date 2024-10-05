const PageVerifier = require('./PageVerifier');
//const puppeteer = require('puppeteer');

const botDegremont = async() => {
    let instancePageVerifier = new PageVerifier("https://degremont.farm/");
    //PROBABLY NEED TO BE AMELIORATED : gestion de l'instance de page dans la classe PageVerifier
    const page = await instancePageVerifier.getNewPage();
    instancePageVerifier.setPage(page);
    await instancePageVerifier.openPage();
    //Aller sur la page contenant la reset cap
    await instancePageVerifier.clickOnElement("a[href='/products/copie-de-reset-cap']");
    await instancePageVerifier.closePage();
}
botDegremont();