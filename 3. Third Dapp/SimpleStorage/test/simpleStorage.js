const SimpleStorage = artifacts.require('SimpleStorage');

contract('SimpleStorage', () => {
  it('should set the value of data variable in smart contract', async () => {
    const simpleStorage = await SimpleStorage.deployed();//reutn a pointer to the contract instance
    await simpleStorage.set(1);//value should be modify and there should be set
    const result = await simpleStorage.get();//accesing the value
    assert(result, 1);//we are doing assertion (checking) comparing the value is equal or not if equal test pass if not fail
  });
});
