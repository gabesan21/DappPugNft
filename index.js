// Your contract address

const mintAddress = "0x04a8c691E0b9Fa887B7D269Bf35CB3BAed6F2f5d";

async function mintar() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();

  const walletAddress = await signer.getAddress();
  const nftContract = new ethers.Contract(mintAddress, mintAbi, signer);

  await nftContract.mint();
}