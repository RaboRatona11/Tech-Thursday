import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import dashboardPage from "../page-objects/dashboard";
import Heroes from "../page-objects/heroes";


const Dashboard = new dashboardPage();
const heroes = new Heroes();

Given(/^the user is on the heroes page$/, () => {
	cy.visit("http://localhost:4200/heroes");
});

Then(/^all heroes will be visible$/, () => {
	heroes.VerifyHeroes();
});

Then(/^see the hero list decrease$/, () => {
	heroes.DeleteHero();
});

