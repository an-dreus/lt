# lt

## Installation
Requires [Node.js](https://nodejs.org/) v14+ to run

1. Clone and change directory to the project:
```
git clone git@github.com:andrei-z/lt.git
cd lt
```

2. Place 2 JSON files
to the root level of the project:

`cypress.json, cypress.env.json`
(the 2 files were sent via email)

3. Install dependencies:
```
lt% npm i
```

To check Cypress installation you may execute:
```
lt% npx cypress open
```

## Running tests
To run the tests headlessly:
```
lt% npx cypress run
```
(explicit `--headless` flag can also be used)

To run the tests headed:
```
lt% npx cypress run --headed
```

To run the tests WITHOUT creating videos (faster):
```
lt% npx cypress run -c video=false
```