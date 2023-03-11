var contractABI = [];
var contractAddress = '0x444A543A4c976B256949Ed029a74A3d53CE37358';
var web3 = new Web3('http://localhost:9545');  //we are going to give url to our local blockcahin development that is ganche instance stared by truffle framework for us
var simpleSmartContract = new web3.eth.Contract(contractABI, contractAddress);//need object that point to the contract that deploy on the blockchain   web3 is a short of container object  but we need specific thing to talk to our contract    simpleSmartContract will be short of pointer to our deployed instance on blockchain using web3 instance we will creat simple smart contract object 

console.log(simpleSmartContract);      //all the account generate by the local development blockchain 
//to read those address from the frontend
web3.eth.getAccounts().then(console.log);      //method retruns the promise and we use .then return a promise


// write the code that will allow us to communcicte with smart contract  for this we goona use web3 library 
//inorder to connect to smart contract it need two information
// 1. what is the abi of the smart contract (abi applicationary binary interface describe externally accesible function of the smart contract )
// 2. address of the smart contract



// now time to run and go to the frontend 



// npm i -g static-server
// npm start 