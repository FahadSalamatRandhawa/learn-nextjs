import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe('Voters Contract', function(){
    
    it('Voters',async function(){
        const Contract=await ethers.getContractFactory('Voters')
        const Voters=await Contract.deploy();
        console.log(await Voters.getVoters());
    })
    it('add voter',async function(){
        const Contract=await ethers.getContractFactory('Voters')
        const Voters=await Contract.deploy();
        Voters.addPeople('new Voter',1);
        console.log(await Voters.getVoters())
    })
})