const simpleStorageABI = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "x",
        "type": "uint256"
      }
    ],
    "name": "set",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "get",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
];
const simpleStorageAddress = "0x875420e8Bf2c069A1bd293334776A5Ff67321cDD";
const web3 = new Web3('http://localhost:9545');
const simpleStorage = new web3.eth.Contract(simpleStorageABI, simpleStorageAddress);//allows us to communciate with our smart contract

document.addEventListener('DOMContentLoaded', () => {
  const $setData = document.getElementById('setData');
  const $data = document.getElementById('data');
  let accounts = []; //array of account this all are the addres which is generate by truffle ganache for us local devlopment blockchain we need this address when we sennd some transaction on the blockchain

  web3.eth.getAccounts()
  .then(_accounts => {
    accounts = _accounts; 
  });


  //calling the function in the blockchain and assigning result in the  page
  const getData = () => { //we need this code multiple time so we wriap in funciton 
    simpleStorage.methods.get().call()   //call execute function on the blockchain 
      .then(result => { //retrun promise
        $data.innerHTML = result;  //and we go result and we add in our html page 
      })
  };

  getData();

  $setData.addEventListener('submit', e => { //when click on submit bottom of form  sumbit
    e.preventDefault(); //prevent reload
    const data = e.target.elements[0].value;  // we need to know where is new value elements of array is all the input of the form so we want the first want and we want its value
    simpleStorage.methods.set(data)     //set the data the user has put in the blockchain     
      .send({from: accounts[0]}) //send method of web3 actually send transaction to the blockchain we can specify few details of the transaction we gonna specify the address that actually send transaction we gona take first addres from account which is generate by ganache
      .then(getData);// here we gonna wait this to execute and  when this is executed we gona execute getdata again  to keep our ui fresh
  });
});


//the way we are sending transaction to the smart contract this is different what we do in test becuase in this case we are using web3 and in test we are useing trufflecontract  
// if you  
// you can use web3 in both fontend and test 
//  trufflecontract in both frontedn and test








// //the here we are sending transaction to smart contract is differnt from where we do in test because hrere we are using web3 library and tconst simpleStorageABI = [
//   const simpleStorageABI =  {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "x",
//         "type": "uint256"
//       }
//     ],
//     "name": "set",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "get",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   }
// ];
// const simpleStorageAddress = "0x5F13592f40bC22F6E47bddfeAbC17ACbb1E21551";
// const web3 = new Web3('http://localhost:9545');
// const simpleStorage = new web3.eth.Contract(simpleStorageABI, simpleStorageAddress);

// document.addEventListener('DOMContentLoaded', () => {
//   const $setData = document.getElementById('setData');
//   const $data = document.getElementById('data');
//   let accounts = []; //arrays of account     //this all are the address tuffle ganache for us local devleopment blockchain  we need this address when we send transaction to the blockchain   
// //populate this accounts array
//   web3.eth.getAccounts()
//   .then(_accounts => {
//     accounts = _accounts; //now account array is populated 
//   });


//   //so we gona reuse this code in two different place so we gonna wrap it
//   const getData = () => {
//     simpleStorage.methods //allow to communicate with smart contract
//       .get()//gona reference the data method this is a getter function
//       .call()//call method actually execute function on the blockchain
//       .then(result => {
//         $data.innerHTML = result;
//       })
//   };


//   getData();

//   $setData.addEventListener('submit', e => { //when we gona click on submit the browser is goging to fire submit event in this element it gives a event object e
//     e.preventDefault(); 
//     const data = e.target.elements[0].value; 
//     simpleStorage.methods
//       .set(data)
//       .send({from: accounts[0]})//send method of web3 actually to send transaction to the blockchain we can specify few dtails of the transaction 
//       .then(getData);//after sending transaction we gonna update the ui becauese the data of the smart contract have changed so we have to refresh the ui to reflect and make ui fresh
//   });
// });
// //the here we are sending transaction to smart contract is differnt from where we do in test because hrere we are using web3 library and in test truffle contract library

