## Load fixtures

The loadFixture function is a built-in helper that simplifies the process of loading test fixtures. It creates a new fresh instance of the contract and returns it, with the added benefit of being able to pass arguments to the fixture function.

You can avoid code duplication and improve the performance of your test suite by using fixtures. A fixture is a setup function that is run only the first time it's invoked. On subsequent invocations, instead of re-running it, Hardhat will reset the state of the network to what it was at the point after the fixture was initially executed.

### Why we need Load Fixture

By using the fixture function, we can ensure that each test starts with a fresh instance of the contract(here on called as `Contract Instance`), and any state changes made to it, in previous tests do not affect the current test.

>Im simple words we use this function to refresh the `Contract Instance` to a fresh state with the default values, instead of creating a new `Instance` from start because that will cause us to duplicate code.

---
- #### How to use Load Fixture
We do this by creating a simple functio(sampleName `contractInstanceFunction`)n which creates a `Contract Instance` returns us the deployed version and other values. Then we wrap that function inside the  `await loadFixture()`

- **Why can't we just recall the contractInstanceFunction**
Because recalling it would use computation power and make the process slow, and consuming