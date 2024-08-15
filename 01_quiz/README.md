# Quiz 1: Classes

> Due: August 22 \
> Weight: 5%

Write classes for the following button components. The `Button` class
represents a generic button. Its constructor takes three arguments: a
label, a color, and the function to be called when a user clicks on the
button. Objects of type `Button` should have a `render` function that
returns the button itself as an `HTMLElement`. The `CancelButton` should
inherit from `Button`, but the label is always "Cancel", the color is
always red, and the handler is a private method that prints "Cancelled"
in the console.

Make sure to document functions using JSDoc.

## Submission

The project must be submitted in a GitHub Classroom repository. To
create the repository, click [here][], and accept the assignment.

[here]: https://classroom.github.com/a/KqFHPmgm


## Assessment criteria [5]

-   Readability [1]

    -   code is free of unused variables and functions
    -   use of whitespace/indentation is tidy and consistent
    -   long lines (~80 chars) are split
    -   whitespace is used to visually support logical separation
    -   variable/function names are consistent and descriptive
    -   constants are used instead of hard-coded values
    -   comments are present where warranted, prose is correct and
        helpful
    -   inline comments are used sparingly where needed to decipher
        dense/complex lines

-   Language conventions [1]

    -   no unnecessary use of obscure constructs 
    -   standard language features are used appropriately

-   Program design [2]

    -   program flow is decomposed into manageable, logical pieces
    -   function interfaces are clean and well encapsulated
    -   appropriate algorithms are used, and coded cleanly
    -   common code is unified, not duplicated

-   Data structures [1]

    -   data structures are appropriate
    -   no redundant storage/copying of data
    -   no global variables
