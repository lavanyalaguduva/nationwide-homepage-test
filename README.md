# Webdriver.io + CucumberJS automation test

Implement the Feature file "src/features/find-mortgage-rate.feature" according to the following:

- Navitage to https://nationwide.co.uk
- Using the Menu navigatge to "Mortgages" > "New mortgage customer: Mortgage rates"
- Find mortgage rate for the following case:
  - Nationwide mortgage = No
  - Type of mortgage = Changing lender
  - Property value = £300,000
  - Mortgage amount = £150,000
  - Term = 30 years
- Filter the results:
  - Mortgage type = Fixed
  - Product fee = With Fee
- Then check the results return the following products:
  - 2 yr Fixed
  - 3 yr Fixed
  - 5 yr Fixed
  - 10 yr Fixed
- Click "More info and apply" and "Apply" button for the "5 yr Fixed" product
- Verify the next page's heading is "Start your remortgage application"

#Install the dependencies
`yarn install`

# Run your tests 
Call the [WDIO runner](http://webdriver.io/guide/testrunner/gettingstarted.html):

```sh
$ yarn run wdio --cucumberOpts.tagExpression='@Test'
```
_please note_ The WDIO runner uses the configuration file `wdio.conf.js` by default.

# Running single feature
Sometimes it's useful to only execute a single feature file, to do so use the following command:

```sh
$ yarn run wdio -- --spec ./test/features/select.feature
```

