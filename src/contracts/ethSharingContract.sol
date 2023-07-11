// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

contract EthSharingContract{


//my variables
  address payable public owner;
  uint public totalStakers;
  mapping(address => uint) public StakeIDOf;
  mapping(address => bool) public DoneWithdraw;
  address public lastReleaseWallet;
  uint public lastReleaseID;
  uint public payoutCount;

  constructor(){
    owner = payable(msg.sender);
  }

  //deposit
  function deposit() external payable {
    //require amount
    require(msg.value >= 12340000 gwei, "Must send exactly 0.01234 Ether or more.");

    //increase total count
    totalStakers+=1;

    //store address of staker
    StakeIDOf[msg.sender] = totalStakers;
    DoneWithdraw[msg.sender] = false;
  }

  //widthraw
  function userWithdraw() external{
    //release formula
    require(totalStakers>=15+(8*(StakeIDOf[msg.sender]-1)));

    //have not yet withdraw
    require(DoneWithdraw[msg.sender] == false);

    //change status to release
    DoneWithdraw[msg.sender] = true;
    lastReleaseWallet = msg.sender;
    lastReleaseID = StakeIDOf[msg.sender];

    //transfer
    payable(msg.sender).transfer(74040000 gwei);

    //increase payout count
    payoutCount++;
  }

  function canIWithdraw() external view returns(bool) {
    require(totalStakers>=15+(8*(StakeIDOf[msg.sender]-1)), "Cannot withdraw yet.");
    return true;
  }

  //get balance
  function getBalance() external view returns(uint) {
    return address(this).balance;
  }


  //send with amount to owner all
  function sendAmountToOwner(uint _amount) external{
    require(msg.sender == owner, "not the owner");
    payable(msg.sender).transfer(_amount);
  }

  //send all to owner
  function sendBalanceToOwner() external {
    require(msg.sender == owner, "Only the contract owner can call this function.");
    uint256 balance = address(this).balance;
    require(balance > 0, "No balance to send.");
    owner.transfer(balance);
  }

}

