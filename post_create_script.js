let instance = await Token.deployed()
let accounts = await web3.eth.getAccounts()

// view total balance
totalBalance = await instance.totalSupply()
totalBalance.toNumber()

// view current account balance
minter_bal = await instance.balanceOf(accounts[0])
minter_bal.toNumber()

// send tokens to receiver
instance.transfer(accounts[1], 1000)

// send from minter to minter
instance.transferFrom(accounts[0], accounts[0], 1000)

// view receiver account balance
receiver_bal = await instance.balanceOf(accounts[1])
receiver_bal.toNumber()
