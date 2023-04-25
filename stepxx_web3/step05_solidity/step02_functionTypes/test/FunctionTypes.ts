import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Gas Costs", function () {
  async function Contract(){
    let FunctionsContract=await ethers.getContractFactory('Functions');
    let Functions=await FunctionsContract.deploy();
    let deploymentGas=await ethers.provider.estimateGas(FunctionsContract.getDeployTransaction());
    console.log('Deployment Gas : ',deploymentGas)
    return {Functions,deploymentGas}
  }

  describe('Unspecified <Public>',function(){
    it('Function Updates State',async function(){
      let {Functions}=await loadFixture(Contract);
      const gasCost=(await (await Functions.update(3)).wait()).gasUsed.toString();
      console.log(`Gas used : ${gasCost}`);
    });
    it('view function inside, Update function',async function(){
      let {Functions}=await loadFixture(Contract);
      const {gasUsed}=(await (await Functions.updateExtra(3)).wait())
      //const receipt=await (await Functions.updateExtra(4)).wait();
      console.log(`Gas used : ${gasUsed}`);
    });
  });

  describe('View', function(){
    it('View Function',async function(){
      let {Functions}=await loadFixture(Contract);
      let viewGas=(await Functions.getLuckyNum());
      console.log(`View Function Does not generate a reciept, so you cannot get its gas`);
    })
  })

  describe('Pure', function(){
    it('Pure Function',async function(){
      let {Functions}=await loadFixture(Contract);
      let result=(await Functions.pureFunc(2,2));
      console.log(`Pure Function Does not generate a reciept, so you cannot get its gas`);
    })
  })
});
