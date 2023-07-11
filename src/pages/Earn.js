import React from 'react'
import { ethers } from "ethers";
import { useState } from "react";
import ethSharing_abi from "../contracts/ethSharing_abi.json";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Earn() {

  let [account, setAccount] = useState("");
  let [userBalance, setUserBalance] = useState("");
  let [userPayOutID, setUserPayOutID] = useState("");
  let [totalNMembers, setTotalNMembers] = useState("");
  let [DoneWithdraw, setDoneWithdraw] = useState("");
  let [payStatus, setPayStatus] = useState(false);
  let [ans, setAns] = useState("");
  
  const { ethereum } = window;
  const connectMetamask = async () => {
		
	  if(window.ethereum !== "undefined") {
      const accounts = await ethereum.request({ method: "eth_requestAccounts"});
      setAccount(accounts[0]);
	  getAccountBalance(accounts[0]);
    }
  }

  const getAccountBalance = (account) => {
	window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
	.then(balance => {
		setUserBalance(ethers.utils.formatEther(balance));
	})
};

  let contract;
  const connectContract = async () => {
    const Address = "0x65d6326BDC8291F325e516bBA0C898799dA18B81";
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    contract = new ethers.Contract(Address, ethSharing_abi, signer);
    console.log(contract.address);
  }


  const checkPayout = async () => {
    const payid = await contract.StakeIDOf(account);
    setUserPayOutID(payid/1);

    const TotalMembers = await contract.totalStakers();
    setTotalNMembers(TotalMembers/1);

    const withdrawStat = await contract.DoneWithdraw(account);
    setDoneWithdraw(withdrawStat/1);
    
    const myAns = 15+(8*(payid-1));
    setAns(myAns/1);
    
    if(payid >= myAns && DoneWithdraw === 0 && TotalMembers >= payid)
    {
        setPayStatus(false)        
    }
    else
    {
        setPayStatus(false)
    }
  }


  const accountChangedHandler = (newAccount) => {
    connectMetamask();
	}

	const chainChangedHandler = () => {
		// reload the page to avoid any errors with chain change mid use of application
		window.location.reload();
	}

	// listen for account changes and chain changes
	window.ethereum.on('accountsChanged', accountChangedHandler);
	window.ethereum.on('chainChanged', chainChangedHandler);


  const userWithdraw = async () => {
	try {
	  const tx = await contract.userWithdraw({gasLimit: 210000 });
	  console.log(tx);
	  // Additional code to handle the transaction response or perform any necessary actions
    } catch (error) {
      // Handle the error if the transaction fails
      console.error(error);
    }
  }


  connectContract();
  
  return (
    <div className='custom-container'>
      <Container>
      <Row>
        <Col lg={12}>

            <h1>EARN BONUS</h1>
			<h3>Step 1. Connect your Metamask Wallet.</h3>
          <button onClick={connectMetamask}>CONNECT</button>
          <p>Wallet Address: {account} <br></br>
		  ETH Balance: {userBalance}<br></br>
  
          </p>

		  <h3>Step 2. Check if Smart Contract Cash Out Conditions are met</h3>
          <button onClick={checkPayout}>CHECK</button>
          <p>Payout ID: {userPayOutID}<br></br>
          Total Members: {totalNMembers}<br></br>
          Members Count to Withdraw: {ans}<br></br>
          Done Withdraw: {DoneWithdraw}<br></br>
          Pay Status: {payStatus.toString()}</p>

		<h3>Step 3. Withdraw</h3>

    {payStatus ? (  
        <button onClick={userWithdraw}>WITHDRAW</button>
      ) : (
        <p>Button for withdraw will be avaiable if conditions are met.</p>)
      } 
		  
		  
		  <p>{payStatus}</p>
        </Col>
      </Row>
      </Container>
    
    </div>
  );
}

export default Earn