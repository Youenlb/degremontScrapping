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