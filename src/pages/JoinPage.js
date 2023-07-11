import { ethers } from "ethers";
import { useState } from "react";
import ethSharing_abi from "../contracts/ethSharing_abi.json";

//import Share from "../components/Share"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../styles/Home.css';

function JoinPage() {

  let [account, setAccount] = useState("");
  let [userBalance, setUserBalance] = useState("");
  let [AgentID, setAgentID] = useState("");
  
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
    const Address = "0xBc379F8175CcBa42C9A32E3Bc02402Aa49D4c709";
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    contract = new ethers.Contract(Address, ethSharing_abi, signer);
    console.log(contract.address);
  }

  const depositEth = async () => {
	try {
    alert("Lorem")
	  const value = ethers.utils.parseEther("0.01234"); // Convert ETH value to Wei
	  const tx = await contract.deposit({ value, gasLimit: 210000 });
	  console.log(tx);
	  // Additional code to handle the transaction response or perform any necessary actions
	} catch (error) {
	  // Handle the error if the transaction fails
	  console.error(error);
	}
  }



  const getAgentID = async () => {
    const agentID = await contract.StakeIDOf(account);
    setAgentID(agentID/1)
  }

  connectContract();

  
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

  return (
    <div className='custom-container'>
    
    <Container>
      <div>
      <Row>
        <Col lg={12}>
            <div style={{backgroundColor:""}}>
            <h1>Become and Agent!</h1>
        <h3>Step 1. Connect your Metamask Wallet.</h3>
        <button onClick={connectMetamask}>CONNECT</button>
        <p>Wallet Address: {account} <br></br>
		    ETH Balance: {userBalance}</p>
 
		  <h3>Step 2. Deposit 0.01234 ETH to the Smart Contract.</h3>
          <button onClick={depositEth}> DEPOSIT</button>
            <p>You need extra ETH for GAS FEE	<br></br>
            Note: Purchasing again will give you another Agent ID which will invalidate the previous one.<br></br>
            (Anti Spam)
            </p>

		<h3>Step 3. Check your Agent ID and Wait</h3>
		  <button onClick={getAgentID}>MY AGENT ID</button>
		  <p>Purchase ID: {AgentID}</p>
      {AgentID > 0 ? (
        <p>You may now claim your free agent ID card and 2x3 tarpaulin at RJ Printing Sampol Market, Sapang Palay, Bulacan.</p>
      ): null
      }

      <h3>Step 4. Share to spread the word and allow everyone to withdraw faster!</h3>
      </div>
        </Col>
      </Row>
      </div>
    </Container>  

		  

      
    </div>
  );
}
export default JoinPage;