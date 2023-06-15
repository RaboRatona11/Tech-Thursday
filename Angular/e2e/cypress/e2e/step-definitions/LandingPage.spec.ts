import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import dashboardPage from "../page-objects/dashboard";
import Heroes from "../page-objects/heroes";


const Dashboard = new dashboardPage();
const heroes = new Heroes();

Given(/^the user is on the landing page$/, () => {
	cy.visit("http://localhost:4200/dashboard");
});

Then(/^the user shall see the employee dashboard$/, () => {
	Dashboard.veryTitle();
});

Then(/^the user shall see the the list of the top 4 Heroes$/, () => {
	return true;
});





