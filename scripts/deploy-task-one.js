import hre from "hardhat";

async function main() {
  const TaskOneStorage = await hre.ethers.getContractFactory("TaskOneStorage");
  const taskOneStorage = await TaskOneStorage.deploy();

  await taskOneStorage.waitForDeployment();

  const address = await taskOneStorage.getAddress();
  console.log(`TaskOneStorage deployed to: ${address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
