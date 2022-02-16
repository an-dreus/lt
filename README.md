# lt
The tests reside under cypress/integration
For the tests to work it's required to add two JSON files
on the root level of the project, namely:

- cypress.json
- cypress.env.json

(the 2 files are sent via email)

Once the files are created it should be possible to run the tests.

To run the tests using the Cypress UI app:
execute 'npx cypress open' from the root of the project, click on the .spec.js

To run the tests using the command line:
execute 'npx cypress run --headed' (omit '--headed' option to run headlessly)

When run from command line, on test failure screenshot and video will be created,
so expect a delay in test execution in case of test failures (due to the video compression process).