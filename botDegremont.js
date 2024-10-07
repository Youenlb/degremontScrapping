const PageVerifier = require('./PageVerifier');
//REFACTOR use API of website to get the availability of product (more maintainable)
//Gérer la vérification de la page reset cap
const botDegremont = async() => {
    let instancePageVerifier = new PageVerifier("https://degremont.farm/");
    //PROBABLY NEED TO BE AMELIORATED : gestion de l'instance de page dans la classe PageVerifier
    const page = await instancePageVerifier.getNewPage();
    instancePageVerifier.setPage(page);
    await instancePageVerifier.openPage();
    //Aller sur la page contenant la reset cap
    await instancePageVerifier.clickOnElement("a[href='/products/copie-de-reset-cap']");
    // Test : await instancePageVerifier.clickOnElement("a[href='/products/jailbreak-denim']");
    //Regarder si le contenu du bouton contient "Ajouter au panier"
    const disponibilite = await instancePageVerifier.contentIsPresent('div[class="product-form__buttons"]', "Ajouter au panier");
    console.log(disponibilite);
    //await instancePageVerifier.closePage();
}
//TO DO : Gérer la vérification de la page du tee shirt
botDegremont();