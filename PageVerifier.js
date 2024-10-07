const puppeteer = require('puppeteer');
//Classe permettant d'effectuer des vérifications sur une page web
class PageVerifier
{
    constructor(url)
    {
        this.url = url;
    }
    setPage(page)
    {
        this.page = page;
    }
    async getNewPage()
    {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        return page;
    }
    async openPage()
    {
        await this.page.goto(this.getUrl());
    }
    async clickOnElement(selector)
    {
        await this.page.click(selector);
    }
    async contentIsPresent(selector, content)
    {
        //Attendre que l'élément soit chargé
        await this.page.waitForSelector(selector);
        //Récupérer l'élément
        const element = await this.page.$(selector);
        //Récupérer le contenu de l'élément
        const elementContent = await this.page.evaluate(element => element.textContent, element);
        //Vérifie que l'élément est présent
        const isPresent = elementContent.includes(content);
        return isPresent;
    }
    async closePage()
    {
        await this.page.close();
    }
    getPage()
    {
        return this.page;
    }
    getUrl()
    {
        return this.url;
    }
}

module.exports = PageVerifier;