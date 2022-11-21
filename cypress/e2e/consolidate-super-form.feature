Feature: Consolidate your super form 
As accum users I want to be able to combine my super with AustralianSuper account

Scenario: Verify account not found error message on submission of consolidate your super form
    Given Launch consolidate your form
    When click on continue on Lets get started page
    And enter personal details and continue
    And enter different super fund details and continue
    And submit the form
    Then I should be seeing successful message for submission
    And take a screenshot of submission successful page and compare

Scenario: Visual test
    Given Launch consolidate your form
    And take a screenshot of landing page and compare 
    When click on continue on Lets get started page
    And take a screenshot of personal detail page and compare
    And enter personal details and continue
    And take a screenshot of different super fund detail page and compare
    And select SMSF super fund toggle option
    And take a screenshot of SMSF super fund fund detail page and compare
    And enter SMSF super fund details and continue
    And take a screenshot of declaration page and compare