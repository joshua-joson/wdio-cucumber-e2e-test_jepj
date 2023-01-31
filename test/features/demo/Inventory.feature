Feature: Inventory

    # @demo 
    # @smoke
    Scenario Outline: Demo Inventory 
        Given Login to inventory system
        Then Inventory page should list <NumberOfProducts>
        # Then Validate all products have a valid price

        Examples:
            | TestID        | NumberOfProducts |
            | INVEN_TC001   | 6                |
