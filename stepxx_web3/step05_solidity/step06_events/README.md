# Events

[Events and Logging in Solidity](https://www.youtube.com/watch?v=KDYJC85eS5M)

Events are built in functions that we can use, first we declare them like this
- `event myEvent(string parameter1,uint32 myNumber);`

and used like this
- `emit myEvent('By Fahad',23);` this will store both the values in EventLog of the EVM.

events can have normal parameters or indexed parameters, normal parameters are encoded and stored in the EVM log structure. while indexed parameters are stored without encoding and also cost less gas to store

- max 3 indexded parameters per event

we mainly use events to store data on blockchain without storing it in the contract