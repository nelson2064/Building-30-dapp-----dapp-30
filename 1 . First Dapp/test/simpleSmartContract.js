
//importing truffle contract artifacts      contract artifacts is a object provided by the tuffle framework to manipulate your smart contract


  //importing contract artifacts
   const SimpleSmartContract = artifacts.require('SimpleSmartContract');

   contract('SimpleSmartContract', () => { //define a contract block underthe hood trufle used mocha framework for testing javascript library       > when you write contract block which is equivalent to describe block of mocha mochajs.org     
    it('should be deployed smart contract properly', async () => {  // we are going to define each test with it statement it is a function which accept first argument which is the description of the test           
     const simpleSmartContract = await SimpleSmartContract.deployed();//generally the first thing you do is your test is to grab the contract instance > so contract instance is a object that point to the deployed samrt contract on the etherum blockchain //  return me a deploy instance of your smart contract  and this object deployed method() it will reutrn you a deployed instance of your smart contract   >  you are able to interact with your smart contract and execute all its function    since our smart contract don't have function but i cannot show you how to execute function in this tet but in next test we are going to do this       //deployed() eoes not deply a contract by itslef it only returns you a js object pointing to an already deployed smart contract           migrations are sued to define what should be deployed 
      console.log(simpleSmartContract.address);//in this test we are going to console the address of the smart contract
      assert(simpleSmartContract.address !== ''); //running assertion usually a comparison  i want to compare simplesmart contract addres != '' becuase if it is empty it is not deployed           
     });
   });
                                                
  //it is not useful but it is our first test so it is simple
                                                