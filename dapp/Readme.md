Ubiq Multisignature Wallet UI
===================

A web user interface for the [MultiSigWallet](https://github.com/gnosis/MultiSigWallet).

Requirements
-------------
* Node v5+ (Confirmed working on v8.17.0 - will not work on current LTS v12.13.0)
* [Grunt-cli](http://gruntjs.com/getting-started#installing-the-cli)

Install
-------------
```
# For Ubuntu/Debian you need to install libusb development headers
apt install -y libusb-1.0-0-dev

# Latest NodeJS (v12.13.0) does NOT appear to work correctly.
# You should use NVM and install Node v8.17.0 for best results: https://github.com/nvm-sh/nvm
nvm install v8.17.0

git clone https://github.com/gnosis/MultiSigWallet.git
cd MultiSigWallet/dapp

# node-gyp is required for 'npm install' to work correctly
npm install node-gyp

npm install -g grunt-cli
npm install
grunt
```

Test
-------------
```
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
