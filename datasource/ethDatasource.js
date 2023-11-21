const { RESTDataSource } = require("apollo-datasource-rest"); //Import RESTDataSource from apollo-datasource-rest library

//Vitalik's Ethereum Address
const eth_address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

//Etherscan Data Source Class
class EtherDataSource extends RESTDataSource {
  constructor() {
    super();
    // Call super() method to inherit RESTDataSource properties

    this.baseURL = "https://api.etherscan.io/api"; // Set base URL of Etherscan API
  }

  async etherBalanceByAddress() {
    // Call get method to fetch data from Etherscan API
    return this.get(
      `?module=account&action=balance&address=${eth_address}&tag=latest&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  async totalSupplyOfEther() {
    // Call get method to fetch total supply of Ether from Etherscan API
    return this.get(
      `?module=stats&action=ethsupply&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  //Paste Code Here For New API Endpoints
  async getLatestEthereumPrice() {
    // Call get method to fetch latest Ethereum price from Etherscan API
    return this.get(
      `?module=stats&action=ethprice&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  async getBlockConfirmationTime() {
    // Call get method to fetch estimated block confirmation time from Etherscan API
    return this.get(
      `?module=gastracker&action=gasestimate&gasprice=2000000000&apikey=${process.env.ETHERSCAN_API}`
    );
  }
}

module.exports = EtherDataSource; // Export EtherDataSource class