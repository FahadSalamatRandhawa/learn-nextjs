# Address
- `address`
- `address payable`

If the contract has a **fallback** or **recieve ether** function it will be executed along with `transfer`. If the `transfer` has no data, the fallback function will be executed. While the fallback function is not intended to handle transactions, it can be used to provide a default behavior in case a user sends Ether to the contract by mistake, without specifying a function to call. For example, a contract could implement a fallback function that simply reverts the transaction, so that any Ether sent to the contract without a specific purpose will be returned to the sender.

## Converstions

address myContract=payable(contractAddress)  //only allowed if the contract can receive Ether, i.e., the contract either has a receive or a payable fallback function

Normal address must be converted explicitly to payable
`address payable myPayable=payable(owner); //ok`

Payable address can be converted to normal address implicitly
`address myAddress=myPayable;  //this will convert the address to non-payable`