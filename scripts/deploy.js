
const hre = require("hardhat");

async function main() {
 

  const kulkonect_chat = await hre.ethers.getContractFactory("kulkonect_chat");

  const Kulkonect_chat = await kulkonect_chat.deploy();

  await Kulkonect_chat.deployed();

  console.log(
    `Contract Address: ${Kulkonect_chat.target}`
  );
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
