// Source code to interact with smart contract

//connection with node
var web3 = new Web3(new Web3.providers.HttpProvider('infura...'));

// contractAddress and abi are setted after contract deploy
var contractAddress = '';
var abi = JSON.parse( '' );

//contract instance
contract = new web3.eth.Contract(abi, contractAddress);

// Accounts
var account;

//Smart contract functions


function registerGetInfo() {
  contract.methods.getInfo().call().then( function( info ) { 
    console.log("info: ", info);
    document.getElementById('lastInfo').innerHTML = info;
  });    
}
