import { ConnectWallet, useContract, Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const contractAddress = "0x1B997f380A3b2EFd185bDEdCC9d7B26B57CA3c2C";
  const {contract} = useContract(contractAddress);
  const [counter, setcounter] = useState<string | undefined>(undefined);

  async function getCounter() {
    if (!contract) return;

    const counter = await contract.call("getCounter");
    setcounter(counter.toString());
  }
    getCounter();
  return (
    <div className={styles.container}> 
      <main className={styles.main}>
      <h1>Counter Dapp</h1>
        <h3>{counter}</h3>
        <Web3Button
          contractAddress={contractAddress}
          action={()=> getCounter()}
        >Refersh Counter</Web3Button>
        <br  />
        <Web3Button
          contractAddress={contractAddress}
          action={(contract)=> contract.call("IncrementCounter")}
        >Increment Counter</Web3Button>
      </main>
    </div>
  );
};

export default Home;
