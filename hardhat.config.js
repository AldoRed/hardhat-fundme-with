require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("hardhat-deploy");
require("@nomicfoundation/hardhat-ethers");
//Require .env file
require("dotenv").config();

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL || "";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
    },
  },
  solidity: {
    compilers: [{ version: "0.8.24" }, { version: "0.8.0" }],
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  sourcify: {
    enabled: true,
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};
