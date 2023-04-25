
### Visiblity Specifiers

- `public`, can be called from outside and inside contract
- `private`, can only be called inside current contract/contract that created the function
- `external`, only be called outside contract, only for functions
- `internal`, only callable in Derived contracts, similar to parent child relationship, if Parent has it, child can access it.

check test files

>If you do not specify any visibility type, by default it is `internal`