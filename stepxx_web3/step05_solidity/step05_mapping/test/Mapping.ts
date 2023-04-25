import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe('Mapping',function (){
  it('Create Instance',async function(){
    async function contractFactory(){
      const Contract=await ethers.getContractFactory('Mapping');
      const Mapping=await Contract.deploy();
  
      return {Mapping};
    }
    const {Mapping}=await contractFactory();
    describe('Testing Functions',async function(){
      it('Add to Map',async function (){
        await Mapping.addFavouriteFood('Fahad','Steak')
        expect(await Mapping.addFavouriteFood('Fahad','Steak')).to.not.reverted;
      })
      it('Return Value against Key',async function(){
        let favFood=await Mapping.getFavFood('Fahad');
        //console.log(favFood);
        expect(favFood).to.equal('Steak');
      })
    })
  })
})
