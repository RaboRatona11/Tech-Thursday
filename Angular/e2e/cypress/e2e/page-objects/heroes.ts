class Heroes{

    // Selectors
    allHeroes = 'app-heroes > ul.heroes > li > a';
    deleteheroe = 'body > app-root > app-heroes > ul > li:nth-child(1) > button';
    
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


}
export default Heroes