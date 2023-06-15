class Heroes{

    // Selectors
    allHeroes = 'app-heroes > ul.heroes > li > a';
    deleteheroe = "body > app-root > app-heroes > ul > li:nth-child(3) > button";
    addHero = "body > app-root > app-heroes > div > button";
    inputHero = "#new-hero";
    
    // Action Methods
    
    // Verifies that the topic library is visible
    VerifyHeroes()
    {
        cy.get(this.allHeroes).should('be.visible');
    }
    DeleteHero()
    {
        cy.get(this.deleteheroe).click();
    }

    AddHero()
    {
        cy.get(this.addHero).click();
    }
    InputHero()
    {
        cy.get(this.inputHero).type("hello");
    }


}
export default Heroes