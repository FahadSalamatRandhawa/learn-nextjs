
## Understanding hardhat
Hardhat is NOT a programing language but rather a development enviornment for Ethereum contracts(also knows an solidity contracts), consider it like Node.js, the same way Node.js allows us to run JavaScript outside of a browser, Hardhat allows us to run smart contracts locally.

Solidity is used to write smart contracts, hardhat is used to run those contracts but hardhat cannot interact with contracts directly, for that purpose we use Ethers.js. Ethers.js allows us to interact with smart contracts and hardhat allows us to compile them.

It might make more sense to think of solidity contracts as classes, and we use Ethers.js to interact with those classes and make instances, and then test the functionality of those instances while running them in HardHat enviornment. 

*you need node>=16 and hardhad to create a hardhat project*
`npm install --save-dev hardhat`

**Below I will list some common commands and what they do**
- `npx hardhat`   [creates a hardhat project environment setup,choose typescript]
(also install `npm install --save-dev "hardhat@^2.14.0" "@nomicfoundation/hardhat-toolbox@^2.0.0"`)
- `npx hardhat compile`  [compiles smart contracts in the **contracts** folder in root directory]
- `npx hardhat test`   [runs the test files one by one in the **test** folder in root directory]

*Everytime you make changes to your smart contract you must compile it with the `npx hardhat compile` command before calling its functionality in the test file in the **test** folder*
