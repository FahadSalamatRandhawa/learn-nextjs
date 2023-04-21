import { ethers } from "hardhat";

async function main() {
  const [deployer]=await ethers.getSigners();
  console.log(`Deployer Adress : `,deployer.address); //this will console log your account address

  console.log(`Built-In Balance : `,(await deployer.getBalance()).toString())

  const contract=await ethers.getContractFactory('StringrContract');
  const ContractInstance=await contract.deploy();
  ContractInstance.setString('updated String')
  
  console.log(`Contract Address`,ContractInstance.address);
  return ContractInstance;
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().then(async (data)=>{console.log(await data.getString()); process.exit(1)}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
