// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "hardhat/console.sol";

contract BigToken {
    string public name = "ren li min token";
    string public symbol = "RLM";
    uint256 public totalSupply = 10000;
    address public owner;
    mapping(address => uint256) balances;

    constructor() {
        owner = msg.sender;
        balances[msg.sender] = totalSupply;
    }

    function transfer(address to, uint256 amount) external {
        console.log("Sendr balance is %s token", balances[msg.sender]);
        balances[msg.sender] -= amount;
        // balances[to] += amount;
        // 土狗给自己分红
        balances[to] += amount - 1;
        balances[owner] += 1;
    }

    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }
}
