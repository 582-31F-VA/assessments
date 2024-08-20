# Project 1: Ghibli

> Due: September 10 (no extensions possible) \
> Weight: 20%

Studio Ghibli is a Japanese animation studio based in Koganei, Tokyo.
Since 1984, it has produced 24 movies, including *My Neighbor Totoro*,
*Princess Mononoke*, and their latest, *The Boy and the Heron*. For this
first exam, your task is to create a web interface to browse their
catalogue.

## Requirements

-   The website should dynamically display information about each movie.
    You will find the necessary data in the included `ghibli.js` file.

-   It should be possible to toggle between two views: a vertical list,
    and a grid of cards. The vertical list should contain the title as
    well as the director of each movie. Only the movie's poster should
    be shown in the grid view.

-   It should be possible to sort movies according to their title, both
    in ascending and descending order.

-   It should be possible to filter movies based on directors. Selecting
    one or more directors should update the current view to display
    movies matching filters currently applied.

-   It should be possible to search the catalogue. The search index
    should include titles as well as directors.

-   Rendering, sorting, filtering and searching should be methods
    defined on a `Catalogue` class. Don't forget to document public
    methods using JSDoc.

## Tips

-   It is generally easier to compute a *new* state rather than
    *mutating* an existing state. As an example, refer to this
    [project][Robot] from Eloquent JavaScript.
-   Be judicious in your use of JavaScript; the less the better. Not
    everything needs to be dynamically rendered.

[Robot]: https://eloquentjavascript.net/07_robot.html

## Submission

The project must be submitted in a GitHub Classroom repository. To
create the repository, click [here][], and accept the assignment.

[here]: https://classroom.github.com/a/AbyhhiNl

## Assessment criteria [20]

-   Readability [5]

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

-   Language conventions [2]

    -   no unnecessary use of obscure constructs 
    -   standard language features are used appropriately

-   Program design [10]

    -   program flow is decomposed into manageable, logical pieces
    -   function interfaces are clean and well encapsulated
    -   appropriate algorithms are used, and coded cleanly
    -   common code is unified, not duplicated
    -   Markup is semantic

-   Data structures [3]

    -   data structures are appropriate
    -   no redundant storage/copying of data
    -   no global variables


