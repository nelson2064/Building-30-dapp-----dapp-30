var helloWorldABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "hello",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  }
];
var helloWorldAddress = "0xF65e9cB4EC4B1EE6E61f28e5191FECD9dA95B394";
var web3 = new Web3('http://localhost:9545');//url of our local blockchain //with web3 library we will be able to communicate with blockchain and also with our smart contract  
var helloWorld = new web3.eth.Contract(helloWorldABI, helloWorldAddress);//contract instance//after we have web3 object we can create contract instance which is a javascript object to communicate with hello world smart contract 
//just to be clear when we create this contrat instance we do not deploy the smart contract again to the blockchain but all we do is create a pointer to a already existence smart contract on the blockchain 


document.addEventListener('DOMContentLoaded', () => {//first let the html page to finish load first so wrap the code   //addeventlistener method which allows to wait for certian event event that we want to wait for DOMContentLoaded and this is fired by dom we need to take care how event work once it fire we gona attach call back function 
  helloWorld.methods.hello().call() //helloWorld pointer methhods object have all the function of smart contrat available in our case it is just hello .call() method to execute tis function inside a call it gona return promise 
  .then(result => {
    document.getElementById('hello').innerHTML = result + ' from the world of the blockchain';     //we are going to add the result to the html page                     if we want to chnage its content then we need to use the innerHTML property it is not realted to  blockchain i am showing you to regular web stuff and it works on decentralized application and also it works in any kind other web application  
  });
});
//so this is how we read a value from smart contract it is not complex you have to do things in order
// 1.code smart contract 
// 2. start truffle console 
// 3.deploy contract 
// 4.copy contract abi/address
// 5.instantiate web3
// 6.instantiate contract instance
// 7.call smart contract function


// [
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "hello",
//     "outputs": [
//       {
//         "name": "",
//         "type": "string"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "pure",
//     "type": "function",
//     "signature": "0x19ff1d21"
//   }
// ];