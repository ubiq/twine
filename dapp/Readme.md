Ubiq Multisignature Wallet UI
===================

A web user interface for the [MultiSigWallet](https://github.com/gnosis/MultiSigWallet).

Requirements
-------------
* Node v10+ (Confirmed working on v10.24.1 - will not work on current LTS v12.13.0)
* [Grunt-cli](http://gruntjs.com/getting-started#installing-the-cli)

Install
-------------
```
# For Ubuntu/Debian you need to install libusb development headers
apt install -y libusb-1.0-0-dev

# Latest NodeJS (v12.13.0) does NOT appear to work correctly.
# You should use NVM and install Node v10.24.1 for best results: https://github.com/nvm-sh/nvm
nvm install v10.24.1

git clone https://github.com/gnosis/MultiSigWallet.git
cd MultiSigWallet/dapp

# node-gyp is required for 'npm install' to work correctly
npm install -g node-gyp@4.0.0

npm install -g grunt-cli@1.3.2
npm install arr-flatten@1.1.0
npm install
grunt
```

Test
-------------
```
npm install -g ganache-cli@6.4.3

npm test
```

Build
-------------

Web version

```
npm run build-libs-web
```

Desktop version

```
npm run build-libs-electron
```
