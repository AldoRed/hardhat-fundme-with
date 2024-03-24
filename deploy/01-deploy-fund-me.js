module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  // When going for localhost or hardhat network we want to use a mock
  if (network.name === "sepolia") {
    await deploy("Mock3VAggregator", {
      contract: "Mock3VAggregator",
      from: deployer,
      args: ["0x694AA1769357215DE4FAC081bf1f309aDC325306"],
      log: true,
    });
  }
};
module.exports.tags = ["Mock3VAggregator"];
