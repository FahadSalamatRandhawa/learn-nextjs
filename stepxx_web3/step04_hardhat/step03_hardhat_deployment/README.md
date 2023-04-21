### Deployment
You can deploy your contract on any network with the follwing command, we will deploy our previous contract and it has a balance by default.
We will write a script in the scripts folder, the process is almost the same as a test

- `npx hardhat run <filePath> --network <network-name-fromconfigfile>`

you also need need to add the network to your `hardhat.config` file, it should like something like this

>You can choose any network, we will use sepolia testnet

```s
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

// Go to https://alchemy.com, sign up, create a new App in
// its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "API KEY";

// Replace this private key with your Sepolia account private key
// To export your private key from Coinbase Wallet, go to
// Settings > Developer Settings > Show private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const SEPOLIA_PRIVATE_KEY = "Wallet KEY";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};

export default config;
```

- ### Prequisits for this
- Wallet/Account, Alchemy or any Web3 Infratsructure provider (Alchemy, Infura, etc)
- Sepolia balance in your account

>You can also follow this tutorial `https://hardhat.org/tutorial/deploying-to-a-live-network` , 
after this you can find you contract deployed on the testnet and also an app in your web3 provider account(Alchemy,etc)