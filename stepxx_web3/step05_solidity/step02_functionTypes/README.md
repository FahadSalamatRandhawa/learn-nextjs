# Function Types

2 types of funcitons do not use any gas, Pure and View

- `view` a function that only reads from state variables and cannot change any state, does not use any gas
- `pure` cannot read or update the state, can only perform computation or some logic, does not use any gas

- `payable` a payable function can recieve any amount of ether, 0 included. It costs gas
- `unspecified` by default functions are `non-payable`, they will reject any ether sent to them. They can update the state of contract and cost gas, any computation doen inside these functions will cost gas.

>if a view function in called inside a function that costs gas, the reading will also cost gas.