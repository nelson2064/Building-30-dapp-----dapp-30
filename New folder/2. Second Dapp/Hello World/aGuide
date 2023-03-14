const HelloWorld = artifacts.require('HelloWorld');

contract('HelloWorld', () => {         //name of the smart contract we are testing
  it('should return Hello World', async () => {  //one test
    const helloWorld = await HelloWorld.deployed();//first we need to pointer to the hello world          contract instance use lower case contract artifacts upper case
    const result = await helloWorld.hello(); 
    assert(result === 'Hello World');
  });
});



// 1. code smart contract 


// 2. write test code for your smart contract

// 1.we got contract artificats
// 2.define contract blocks
// 3. we define  test 
// 4.we got contract instance 
// 5.execute the function that we are testing         //we store the result in result variable
// 6.after that we do our assertion if this assertion passes our test pass  other wise our test gonaa fail
// 7. truffle test


// 3.migrations



// 4.frontend
// > tuffle compile => contract artifact => abi/address


// 5. now for the contract address we need to start truffle console and deploy the smart contract to the blockchain 
// a)start truffle console > truffle develop
// b)deploy the smart contract migrate --reset 

// 7.after frontend 
// npm i -g static-server
// npm start 