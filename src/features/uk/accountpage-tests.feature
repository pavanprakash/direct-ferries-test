Feature: Direct Ferries accountpage

    Scenario: Account Page Incorrect Details Check
        Given I am on the accountpage
        When I enter manage booking with email as 't@t.com' and ref number as 'DPF1234'
        Then I verify incorrect RefNumber