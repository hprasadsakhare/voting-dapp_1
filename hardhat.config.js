/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

// const { RPC_URL, PRIVATE_KEY } = process.env;
const Private_key = process.env.PRIVATE_KEY;
const Rpc_Url = process.env.RPC_URL;

module.exports = {
  solidity: "0.8.25",
  defaultNetwork: "Edu_Chain",
  networks: {
   //  hardhat: {},
   Edu_Chain: {
      url: Rpc_Url,
      accounts: [`0x${Private_key}`],
    },
  },
};
