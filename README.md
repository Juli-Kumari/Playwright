*** PLAYWRIGHT TYPESCRIPT ***

1. npx playwright test ===> to run the TS

1. file name in format 'file.spec.ts' / 'file.test.ts'.
2. Page fixture in Playwright
3. async({page})=>()
Playwright (TypeScript) - async / await in JavaScript / Type Script & Page fixture in 
Playwright

await / async in Java Script / Type Script - 
await operator is used to wait for the promise, it allows us to wait until the promise has been completed before moving onto the next line.
JavaScript require to use of the await keyword inside a function marked with an async keyword.

Page Fixture -
The { page } argument tells Playwright Test to setup the page fixture and provide it to your test function.
Playwright Test will setup the page fixture before running the Test and tear it down after the test has finished.
Test fixtures are isolated between tests.
4. const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
5.  - Playwright (TypeScript) - Locator Method using Selectors (Xpath, CSS Selector, Text, Id)

Locators 

locators represent a way to find element(s) on the page at any moment.
locator can be created with the page.locator() method.

Locator Method

The method returns an element locator that can be used to perform actions on page / frame.

Locator Method Usage 
page.locator(selector);
page.locator(selector, options);

Different Types of Selector 
Xpath - XPath is a technique to navigate through a page’s HTML structure.
1 - //htmltag[@attribute=’attributeValue’]
2 - //*[@attribute=’attributeValue’]


Css Selectors - CSS Selectors are string patterns used to identify an element based on a 
combination of HTML tag, id, class, and attributes.
1 - htmltag.classvalue / .classvalue
2 - htmltaghassymbolidValue / hassymbolidValue
3 - htmltag[attributeName=attributeValue] / [attributeName=attributeValue]

Text
1 - text=’textValue’  - Cases Sensitive Text
2 - test=textValue  - Non Case Sensitive text


id, data-testid, data-test-id, data-test, ………………….. and So on.
1 - id/data-test-id/data-test=value

6. - Playwright (TypeScript) - Locator Method usage with Options argument (Optional Argument) in Playwright

Syntax - 
page.locator(selector, options);

Different Type of Options - 
has Locator - Matches elements containing an element that matches an inner locator. 

hasNot Locator  - Matches elements that do not contain an element that matches an inner locator. 

hasText Locator - Matches elements containing specified text somewhere inside, possibly in a child or a descendant element. 

hasNotText locator - Matches elements that do not contain specified text somewhere inside, possibly in a child or a descendant element. 
Note - (Regular expressions are patterns used to match character combinations in strings.)

7. Playwright (TypeScript) - getBy methods in Playwright

1 - getByLabel -
Allows locating input elements by the text of the associated label or aria-labelledby element, or by the aria-label attribute. 
Accessible Rich Internet Applications (ARIA) is a set of roles and attributes that define ways to make web content and web applications more accessible to people with disabilities.
Use this locator when locating form fields.

2 - getByPlaceHolder - 
Allows locating input elements by the placeholder text.
Use this locator when locating form elements that do not have labels but do have placeholder texts.

3 - getByText - 
Allows locating elements that contain given text.
You can match by a substring, exact string, or a regular expression when using this method.
It is recommended using text locators to find non-interactive elements like div, span, p, etc. For interactive elements like button, a, input, etc. use Role locator.

4 - getByAltText - 
Allows locating elements by their alt text.
Use this locator when your element supports alt text such as img and area elements.

5 - getByTitle - 
Allows locating elements by their title attribute.
Use this locator when your element has the title attribute.

6 - getByRole - 
Allows locating elements by their ARIA role, ARIA attributes and accessible name.
Accessible Rich Internet Applications (ARIA) is a set of roles and attributes that define ways to make web content and web applications more accessible to people with disabilities.
Role locators include buttons, checkboxes, headings, links, lists, tables, and many more and follow W3C specifications for ARIA role, ARIA attributes and accessible name.
It is recommend prioritizing role locators to locate elements, as it is the closest way to how users and assistive technology perceive the page.

7 - getByTestId
Locates an element based on it’s data-testid (Other attributes can be configured).
You can also use test ids when you choose to use the test id methodology or when you can't locate by role or text. 

8. Playwright (TypeScript) - Assertions in Playwright

What are Assertions - We can call assertions as verifications or checks which can be done in our tests, Playwright includes test assertions in the form of expect function.

Type of Assertions - 
Assertions are classified into 2 parts - 
 1 - Auto-retrying Assertions - These assertions will retry until the assertion passes, or the assertion timeout is reached. Note that retrying assertions are async, so you must await them.
 2 - Non retrying Assertions - These assertions allow you to test any conditions, but do not auto-retry. Most of the time, web pages show information asynchronously, and using non-retrying assertions can lead to a flaky test.

Note - Prefer auto-retrying assertions whenever possible. 

Commonly used Auto-retrying Assertions - 

await expect(locator).toHaveCount()  - To check Specific number of elements are present on the page or not.
await expect(locator).toBeEnabled() - To check if element is enabled or not.
await expect(locator).toBeDisabled() - To check if an element is disabled or not.
await expect(locator).toBeVisible() - To check if an element is visible or not.
await expect(locator).toBeHidden() - To check Element is hidden or not.
await expect(locator).toHaveText(‘text’) - To check Element have specified text or not.
await expect(locator).toHaveAttribute(‘attribute’, ‘AttributeValue’) - To check if the element have specified value of attribute
await expect(locator).toHaveId(‘IdValue’) - To check if the element have specified value of id
await expect(locator).toHaveClass(‘ClassValue’) - To check if the element have specified value of id
await expect(page).toHaveURL(‘URLValue’) - To check if the page has specified URL or not
 await expect(page).toHaveTitle(‘TitleValue’) -  To check if the page has specified Title or not


Some Non retrying Assertions -
expect(value).toBe() - Value is the same
expect(value).toBeLessThan() - Number is less than

Negative Matchers - we can expect the opposite to be true by adding a .not to the front of the matchers:
Examples - 
expect(value).not.toEqual(0);
await expect(locator).not.toHaveText('some text');

Custom Expect Message - 
You can specify a custom error message as a second argument to the expect function.

Example -
await expect(locator, ‘Custom Error Message’).not.toHaveText('some text');


Soft Assertion - 
By default, failed assertion will terminate test execution. Playwright also supports soft assertions: failed soft assertions do not terminate test execution, but mark the test as failed.
Examples - 
expect.soft(value).not.toEqual(0);
await expect.soft(locator).toHaveText('some text');

9.  Playwright (TypeScript) - Understanding of Playwright configuration file playwright.config.ts

Playwright has many options to configure how your tests are run. You can specify these options in the configuration file.
Below are some options.
 
testDir
fullyParallel
forbidOnly
retries
workers
reporter
Timeout
expect with {timeout}
use with {trace, headless}
Projects with name and use
headless

==============================================================

10. Playwright with TypeScript | Page Object Models | POM

Page Object Model, also known as POM, is a design pattern in test automation that creates an object repository for storing all locators.
The page object will contain the representation of the page, and the services the page provides via methods.

Disadvantage if Not using POM
There is no separation between the test method and the AUT’s locators
The locators would be spread in multiple tests and would be difficult to maintain.

Advantages of POM
There is a clean separation between the test code and page-specific code, such as locators.
There is a single repository for the services or operations the page offers rather than having these services scattered throughout the tests.
Page Object is a Design Pattern that has become popular in test automation for enhancing test maintenance and reducing code duplication.
The benefit is that if the UI changes for the page, the tests themselves don’t need to change, only the code within the page object needs to change.

--> readonly ==> we can define these properties only inside the cnotructor and unchanged.
-->  // use assertion in test class:- 
    // const targetAndBidsPage = new TargetAndBidsPage(page)
    // await expect(TargetAndBidsPage.biddingStrategyText).toHaveText('Bidding Strategy');

11. Playwright (TypeScript) - HTML Report with Screenshot, Videos, Retries and Trace Viewer

HTML reporter produces a self-contained folder that contains report for the test run that can be served as a web page.
The HTML report shows you a report of all your tests that have been run.
It also shows that on which browser test ran.
The HTML report also shows  how long the test took to run. 
Tests can be filtered by passed tests, failed, flakey or skipped tests. 
You can also search for a particular test.
Clicking on a test will open the detailed view where you can see more information on your tests such as the errors, the test steps.
We can also embed Screenshot, Videos and Trace Viewer into HTML report.
We can also see retries details in HTML report.

Ways to Generate HTML FIle - 
1- By Configuring into config.ts file
2- By commane - npx playwright test --reporter=html

Show Report - 
npx playwright show-report
npx playwright show-report customFolderName

12. Playwright (TypeScript) - Test Annotations

Playwright Test supports test annotations to deal with failures, flakiness, skip, focus etc

test.describe() - Declares a group of tests.

test.only() - Declares a focused test. If there are some focused tests or suites, all of them will be run but nothing else.

test.skip() - marks the test as irrelevant. Playwright Test does not run such a test. Use this annotation when the test is not applicable in some configuration.

test.fixme() - Declares a test to be fixed, similarly to test(). This test will not be run.

test.slow() - marks the test as slow and triples the test timeout.

test.setTimeOut() - Changes the timeout for the currently running test. Zero means no timeout. 

test.fail() - Unconditionally marks a test as "should fail". Playwright Test runs this test and ensures that it is actually failing. This is useful for documentation purposes to acknowledge that some functionality is broken until it is fixed.

13. Playwright (TypeScript) | Hooks (beforeEach, AfterEach, beforeAll, AfterAll)


beforeEach - 


Syntax - 
test.beforeEach(hookFunction)
test.beforeEach(title, hookFunction)


beforeEach hook that is executed before each test.
When called in the scope of a test file, runs before each test in the file.
When called inside a test.describe() group, runs before each test in the group.
 If multiple beforeEach hooks are added, they will run in the order of their registration.  


afterEach - 


Syntax - 
test.afterEach(hookFunction)
test.afterEach(title, hookFunction)


afterEach hook that is executed after each test.
When called in the scope of a test file, runs after each test in the file.
When called inside a test.describe() group, runs after each test in the group.  
If multiple afterEach hooks are added, they will run in the order of their registration.


beforeAll -

Syntax - 
test.beforeAll(hookFunction)
test.beforeAll(title, hookFunction)


beforeAll hook that is executed once per worker process before all tests.
When called in the scope of a test file, runs before all tests in the file.
When called inside a test.describe() group, runs before all tests in the group. 
If multiple beforeAll hooks are added, they will run in the order of their registration.


afterAll -

Syntax - 
test.afterAll(hookFunction)
test.afterAll(title, hookFunction)


afterAll hook is executed once per worker after all tests.
When called in the scope of a test file, runs after all tests in the file.
When called inside a test.describe() group, runs after all tests in the group. 
If multiple afterAll hooks are added, they will run in the order of their registration.


14. 

** NOTES **
1. codegen/ pickLocator -> to directly get the locators.
2. By default timeouts is 30 sec for locator.
3. By default timeouts is 5 sec for expect--> assertion.
4. npx playwright test Assertion.spec.ts --project='firefox' --> To run in particular browser/system
5. npx playwright test Assertion.spec.ts --project='firefox' --headed --> To run in particular browser/system with headed mode.
6. Reports in playwright -> by default report store in the below folder ==> playwrite-report --> index.html
