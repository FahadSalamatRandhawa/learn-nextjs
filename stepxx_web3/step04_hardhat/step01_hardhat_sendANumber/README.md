# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```
---
#### **In this task we will send a random number bewtween 1 to 10 to our smart contract, and we will write a test to check whether it is above 5 or less than 5. We will also console.log our number in the smart contract.**


- Create a new file in `contracts` folder called ***Number.sol***(solidity extension is always *.sol)
- Then create a new file called Number.ts in `test` folder called ***Number.ts***(ethers file extension can be *.js or *.ts)  < * represents any name >


>*I will explain the code step by step in the files*, the explanation I provide about the `Code` will be wirtten in `/*explanation*/` and not the `//`