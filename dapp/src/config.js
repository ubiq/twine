var txDefaultOrig =
{
  websites: {
    "wallet": "https://wallet.gnosis.pm",
    "gnosis": "https://gnosis.pm",
    "ethGasStation": "https://safe-relay.gnosis.pm/api/v1/gas-station/"
  },
  resources : {
    "termsOfUse": "https://wallet.gnosis.pm/TermsofUseMultisig.pdf",
    "privacyPolicy": "https://gnosis.io/privacy-policy",
    "imprint": "https://wallet.gnosis.pm/imprint.html"
  },
  gasLimit: 3141592,
  gasPrice: 18000000000,
  ethereumNode: "https://mainnet.infura.io:443",
  connectionChecker: {
    method : "OPTIONS",
    url : "https://www.google.com",
    checkInterval: 5000
  },
  accountsChecker: {
    checkInterval: 5000
  },
  transactionChecker: {
    checkInterval: 15000
  },
  wallet: "injected",
  defaultChainID: null,
  // Mainnet
  walletFactoryAddress: "0x6e95c8e8557abc08b46f3c347ba06f8dc012763f",
  tokens: [
    {
      'address': '0x1FA6A37c64804C0D797bA6bC1955E50068FbF362',
      'name': 'Wrapped Ubiq',
      'symbol': 'WUBQ',
      'decimals': 18
    }
  ]
};

if (isElectron) {
  txDefaultOrig.wallet = "remotenode";
}

var txDefault = {
  ethereumNodes : [
    {
      url : "https://mainnet.infura.io:443",
      name: "Remote Mainnet"
    },
    {
      url : "https://ropsten.infura.io:443",
      name: "Remote Ropsten"
    },
    {
      url : "https://kovan.infura.io:443",
      name: "Remote Kovan"
    },
    {
      url : "https://rinkeby.infura.io:443",
      name: "Remote Rinkeby"
    },
    {
      url : "http://localhost:8545",
      name: "Local node"
    }
  ],
  walletFactoryAddresses: {
    'mainnet': {
      name: 'Mainnet',
      address: txDefaultOrig.walletFactoryAddress
    },
    'ropsten': {
      name: 'Ropsten',
      address: '0x5cb85db3e237cac78cbb3fd63e84488cac5bd3dd'
    },
    'kovan': {
      name: 'Kovan',
      address: '0x2c992817e0152a65937527b774c7a99a84603045'
    },
    'rinkeby': {
      name: 'Rinkeby',
      address: '0x19ba60816abca236baa096105df09260a4791418'
    },
    'privatenet': {
      name: 'Privatenet',
      address: '0xd79426bcee5b46fde413ededeb38364b3e666097'
    }
  }
};

var oldWalletFactoryAddresses = [
  ("0x12ff9a987c648c5608b2c2a76f58de74a3bf1987").toLowerCase(),
  ("0xed5a90efa30637606ddaf4f4b3d42bb49d79bd4e").toLowerCase(),
  ("0xa0dbdadcbcc540be9bf4e9a812035eb1289dad73").toLowerCase()
];

/**
* Update the default wallet factory address in local storage
*/
function checkWalletFactoryAddress() {
  var userConfig = JSON.parse(localStorage.getItem("userConfig"));

  if (userConfig && oldWalletFactoryAddresses.indexOf(userConfig.walletFactoryAddress.toLowerCase()) >= 0) {
    userConfig.walletFactoryAddress = txDefaultOrig.walletFactoryAddress;
    localStorage.setItem("userConfig", JSON.stringify(userConfig));
  }
}

/**
* Reload configuration
*/
function loadConfiguration () {
  var userConfig = JSON.parse(localStorage.getItem("userConfig"));
  Object.assign(txDefault, txDefaultOrig, userConfig);
}

checkWalletFactoryAddress();
loadConfiguration();
