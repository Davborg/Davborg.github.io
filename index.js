// Source code to interact with smart contract

const Web3 = require('web3');

//connection with node
var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/537393d11b444181a5f4c81702e0be5e'));

web3.eth.net.isListening()
   .then(() => alert('web3 is connected'))
   .catch(e => alert('Wow. Something went wrong'));


// contractAddress and abi are setted after contract deploy
var contractAddress = '0x567E2A8E4Df3845dEC5327F634c2c16EdbA2E1aA';
var abi = JSON.parse( '[{"inputs": [{"internalType": "uint256","name": "num","type": "uint256"}],"name": "store","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"name": "retrieve","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"}]' );

//contract instance
var contract = new web3.eth.Contract(abi, contractAddress);

// Accounts
//var account;

//Smart contract functions


function registerGetInfo() {
	document.getElementById('lastInfo').innerHTML = "test2";
   //contract.methods.retrieve().call().then( function( info ) {
	  // var provider = web3.eth.currentProvider;
	   //contract.methods.retrieve().call().then( function( info ) { 
		alert(info);
		document.getElementById('lastInfo').innerHTML = String(info);

    //contract.methods.retrieve().call().then( function (message){
	//	document.getElementById('lastInfo').innerHTML = String(message);
	});    
}
