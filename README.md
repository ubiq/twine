Ubiq Multisignature Wallet
===================

## This repo has been deprecated and replaced by Safe Multisig. Please find the Safe repository here: https://github.com/gnosis/safe-contracts

[![Join the chat at https://gitter.im/gnosis/MultiSigWallet](https://badges.gitter.im/gnosis/MultiSigWallet.svg)](https://gitter.im/gnosis/MultiSigWallet?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

The purpose of multisig wallets is to increase security by requiring multiple parties to agree on transactions before execution. Transactions can be executed only when confirmed by a predefined number of owners. A web user interface can be found [here](/dapp).

**NOTE:** Not compatible with current NodeJS LTS. Recommended NodeJS version is v10.24.1 (last LTS for v6).

Features
-------------

- Can hold Ether and all kind of tokens with multisig support
- Easy to use offline signing (cold wallet) support
- Integration with web3 wallets (Metamask/Sparrow, etc)
- Transaction data and log decoding, makes transactions more readable
- Interacting with any contracts with UI support
- Hardware wallet support (Ledger Wallet)
- Optional email notifications when an event is triggered or you are required to sign a transaction

Install
-------------
```
# For Ubuntu/Debian you need to install libusb development headers
apt install -y libusb-1.0-0-dev

git clone https://github.com/gnosis/MultiSigWallet.git
cd MultiSigWallet

# Latest NodeJS (v12.13.0) does NOT appear to work correctly.
# You should use NVM and install Node v10.24.1 for best results: https://github.com/nvm-sh/nvm
nvm install v10.24.1

# node-gyp is required for 'npm install' to work correctly
npm install -g node-gyp@4.0.0

npm install
```

Test
-------------
### Run contract tests:
```
npm test
```
### Run interface tests:
```
npm run test-dapp
```

Deploy Contracts
-------------
### Deploy multisig wallet:
```
truffle migrate <account1,account2,...,accountN> <requiredConfirmations>
```
### Deploy multisig wallet with daily limit:
```
truffle migrate <account1,account2,...,accountN> <requiredConfirmations> <dailyLimit>
```

Interface Releases
------------------
You can find binaries for OSX, Windows and Linux [here](https://github.com/gnosis/MultiSigWallet/releases)

Limitations
-------------
This implementation does not allow the creation of smart contracts via multisignature transactions.
Transactions to address 0 cannot be done. Any other transaction can be done.

Security
-------------
All contracts are WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

License
-------------
[LGPL v3](./LICENSE)

FAQ
-------------
### How to set a custom Ubiq Node?
You can specify a custom Ubiq Node endpoint by going to `settings` page. Click on `Ethereum Node` dropdown menu and select `Custom configuration`, this would make the Ubiq node's field editable. Please write your new endpoint there. Remember, if `Web3 Provider` is set to `Default (Metamask/Sparrow)`, Multisig will use the Ubiq Node endpoint coming with the Web3 Provider, so in that case go to your injected Web3 Provider (Metamask for instance) and update/switch your Ubiq Node endpoint.

### I've imported a Multisig address or a contract address into address book but it gets detected as a EOA
Make sure you're connected to the same network your Multisig/contract was created on, if you created it on Mainnet, you should then connect to Mainnet in order to let the system detect its type correctly.


