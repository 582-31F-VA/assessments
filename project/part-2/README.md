# Project: Part 2

> Due: October 1 \
> Weight: 20%

The included Go server has four routes:

-   It responds to `GET /` requests with the content of the `home.tmpl`
    template file.
-   It responds to `GET /film/view/{id}` requests with the content of
    the `film.tmpl` template file.
-   It responds to `GET /api/films` requests with data in JSON format
    about Ghibli movies.
-   For GET requests whose URL starts with `/static/`, it serves the
    file with the matching path in the `ui/static` directory.

Furthermore, clients can use query parameters to search, filter and sort
movies returned for `GET /` and `GET /api/films` requests. For instance,
a request with the URL `/api/films?search=Arr` will only return movies
whose title or director contains 'Arr'. For filters, more than one
criterion can be included like so: `/api/films?filter=Hayao+Miyazaki&filter=Isao+Takahata`.
The value for `sort` must be either "ascending"
or "descending". You can use a GET form to add query parameters from
within an HTML document. The [URLSearchParams][] interface should be
used to encode query parameters in JavaScript.

[URLSearchParams]: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams

Your task for this second part of the Ghibli Catalogue project is to
build a web interface for this server. The website should work without
JavaScript (including searching, filtering, and sorting). If JavaScript
is available, searching, filtering and sorting the catalogue should be
done without reloading the page (i.e., by making a `fetch` request to
`/api/films`, and adding the data to the document through DOM
manipulation). Don't forget to handle possible errors.

The `home.tmpl` template file has access to a `Films` slice which
contains `film` structs. Refer to the `home.tmpl` file included in the
`ui/html/pages` directory for how to use the data in your template.
The `film.tmpl` template file has access to the `film` struct whose
`Id` matches the one given in the URL. Again, refer to the given
example for how to use the data. You will find the definition of the
`film` struct below.

```go
type film struct {
	Id            string
	Title         string
	OriginalTitle string
	Image         string
	MovieBanner   string
	Description   string
	Director      string
	Producer      string
	ReleaseDate   string
	RunningTime   string
}
```

On the home page, only the title, image and director should be
displayed. On the page for a specific film, however, all the information
should be made available.

You can refer to the Go source files, but you are *not* allowed to
modify them. You can add markup and actions to the template files. You
can also add JavaScript and CSS files inside the `static` directory.

## Submission

The project must be submitted in a GitHub Classroom repository. To
create the repository, click [here][], and accept the assignment.

[here]: https://classroom.github.com/a/6Fv0R9NZ

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
    -   markup is semantic
    -   errors are properly handled

-   Data structures [3]

    -   data structures are appropriate
    -   no redundant storage/copying of data
    -   no global variables
