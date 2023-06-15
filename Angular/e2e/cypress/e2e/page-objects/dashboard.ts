class dashboardPage
{
    //Selector
    dashboardTitle ="app-dashboard > h2 "

    //Action Methods/Tests
    veryTitle()
    {
        cy.get(this.dashboardTitle).should('contain', "Top Heroes");

    }
}

export default dashboardPage;