// Source code to interact with smart contract

//connection with node
var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/537393d11b444181a5f4c81702e0be5e'));

// contractAddress and abi are setted after contract deploy
var contractAddress = '0x567E2A8E4Df3845dEC5327F634c2c16EdbA2E1aA';
var abi = JSON.parse( '[{"inputs": [{"internalType": "uint256","name": "num","type": "uint256"}],"name": "store","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"name": "retrieve","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"}]' );

//contract instance
contract = new web3.eth.Contract(abi, contractAddress);

// Accounts
//var account;

//Smart contract functions

document.getElementById('lastInfo').innerHTML = String(contract.methods.retrieve().call());


function registerGetInfo() {
	//document.getElementById('lastInfo').innerHTML = "test2";
   //contract.methods.retrieve().call().then( function( info ) {
	var message = 1;  
    contract.methods.retrieve().call().then( function (message){
		document.getElementById('lastInfo').innerHTML = String(message);
	});
	
  //});    
}
