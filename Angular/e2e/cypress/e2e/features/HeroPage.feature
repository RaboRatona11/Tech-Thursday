Feature: Heroes Functionality

    This Feature tests heroes page scenarios

    Background: 
        Given the user is on the heroes page

    Scenario: As a TOH user, I want to see to all 9 heroes
        Then all heroes will be visible

        Scenario: As a TOH user, I want to see to all 9 heroes
        Then all heroes will be visible

        Scenario:  As a TOH user, I want to remove a hero
        When when the user removes a hero
        Then see the hero list decrease


        Scenario:  As a TOH user, I want to add a hero
        When when the user enters an input{x} a hero
        Then see the hero {x} is added to the list
