# LIA

> Due: October 16 \
> Weight: 35%

For this course's LIA, you are tasked with implementing a custom element
that validates a form input using `fetch`. The custom element should
observe two attributes: `href` which allows users of the custom element
to specify where to send the `fetch` request, and `show-valid` which
determines whether or not the custom element should display a message
when the input's value is valid. Validation should happen every time the
input [loses focus][focusout]. When the response of the `fetch` request
indicates that the value is invalid, an error message explaining what is
wrong should be displayed in the custom element. Servers usually send a
response with the 422 status code (Unprocessable Entity) when form data
is invalid.

[focusout]:
https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event

Markup example:

```html
<field-validator href="/api/validate/password" show-valid>
    <input type="text" name="password">
</field-validator>
```

To test your custom element, you should use the server provided in the
`server.go` file. To start the server, execute `go run server.go` in
your terminal. The server validates a URL encoded password included in
the body of POST requests sent at `/api/validate/password`. It also
validated URL encoded email addresses sent at `/api/validate/email`.
If the email or the password is invalid, an explanation will be included
in the response's body. This message should be displayed as an error in
the custom element.

The server serves any file matching the URL's path in the working
directory. You can use it to serve your HTML document and your
JavaScript files.

Finally, make sure your `fetch` request includes the necessary headers,
and that your code gracefully handles potential errors related to
`fetch` requests.

## Submission

The LIA must be submitted in a GitHub Classroom repository. To create
the repository, click [here][], and accept the assignment.

[here]: https://classroom.github.com/a/C7-CaCfp

## Interview

Individual interviews will be conducted during the last class to assess
your understanding of the subjects covered throughout the semester. Your
ability to clearly explain your code will influence the mark you
receive.

## Assessment criteria [35]

-   Readability [10]

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

-   Program design [20]

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
