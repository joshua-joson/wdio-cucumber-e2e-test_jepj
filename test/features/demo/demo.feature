Feature: Demo Feature

    # @demo 
    @smoke
    Scenario Outline: Run first demo feature
        Given Google page is opened
        When Search with <SearchItem>
        Then Click on the first search result
        Then URL should match <ExpectedURL>
        Examples:
            | TestID  | SearchItem | ExpectedURL |
            | DEMO_TC001 | WDIO    | https://webdriver.io/  |
            # | DEMO_TC002 | Deloitte    | https://www2.deloitte.com/us/en.html |
            # | DEMO_TC003 | SAP    | https://www.sap.com/sea/index.html |
            # | DEMO_TC322 | 322    | https://afkgaming.com/dota2/news/6679-what-is-322-in-dota-2-solos-most-notorious-moment|