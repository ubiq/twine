module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8588,
      network_id: "*", // Match any network id
      gas: 4000000,
      gasPrice: 10000000000, // 10 gwei
    }
  }
};
