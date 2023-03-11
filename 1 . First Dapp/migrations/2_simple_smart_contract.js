const SimpleSmartContract = artifacts.require("SimpleSmartContract");
//you can use this contract artifacts to actually do the migration of your smart contract and deploy to the blockchain   

//a migration will explain to truffle how we can deploy the smart contract 


//each migration need to export a function this function goona be given deployer object and deployer object have deploy method it can deploy contract artifacts 
module.exports = function(deployer) {
  deployer.deploy(SimpleSmartContract);
};




// 1.first write smart contract 
//2.write test code >                                                                            1.   truffle test
//3.come in migration file 
//4.and then i will start local devlopment blockchain >                                           2.   truffle develop 
    //  > it start local devlopment blockchain  under the hood it uses library called ganache 
    //  >generate 10 address and private keys > this 10 address unlocked it means we don't need to sign the transaction that gona be handy and with this we avoid using metamask  in the frontend and development experience will be smooth  when you run turffle develop it start local development blockchain and also it start a console allow you to interact  with this blockchain 

    // >>>>>> when you run turffle develop it start local development blockchain and also it start a console allow you to interact  with this blockchain 

// 5.compile and deploy
    // first commnad now we will use is (migrate --reset) >                                          3. migrate --reset
    // truffle migrate command first it gonna do two things >> 1. compile 2.deploy
        //  1. compile our all smart contract inside a contract folder create a build directory and put contract artifacts in the directory 
        //2. deploy our smart contract by running all the migration inside our migration folder 


 //6. so at this time if there is problem with migration  you will see an error during at this stage 
