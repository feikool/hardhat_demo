import { time, loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { anyValue } from '@nomicfoundation/hardhat-chai-matchers/withArgs';
import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('Token', function () {
  let Token, token: any, owner: any, add1: any, add2: any;
  beforeEach(async () => {
    Token = await ethers.getContractFactory('BigToken');
    token = await Token.deploy();
    [owner, add1, add2] = await ethers.getSigners();
  });

  describe('test Deployment', () => {
    it('所有者正确', async () => {
      expect(await token.owner()).to.equal(owner.address);
    });
    it('部署者拥有所有的通证', async () => {
      const totaoSupply = await token.totalSupply();
      expect(await token.balanceOf(owner.address)).to.equal(totaoSupply);
    });
  });

  describe('发送token', () => {
    it('正确发送token', async () => {
      await token.transfer(add1.address, 100);
      const balAddr1 = await token.balanceOf(add1.address);
      expect(balAddr1).to.equal(99); // 100

      await token.connect(add1).transfer(add2.address, 50);
      const balAddr2 = await token.balanceOf(add1.address);
      expect(balAddr2).to.equal(49); // 50
    });
  });
});
