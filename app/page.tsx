"use client";
import { useSolana } from "@phantom/react-sdk";
import { useEffect } from "react";
import { PhantomButton } from "@/components/phantomBtn";
import { Button } from "@/components/ui/button";
import { ll } from "@/lib/utils";

export default function Home() {
  useEffect(() => {}, []);
  const { solana, isAvailable } = useSolana();
  ll("isAvailable:", isAvailable);

  // const _onEntrosVerify = () => {
  //   entrosVerify(touchElement, walletAdapter, solana);
  // };
  const signAndSendTransaction = async (transaction: any) => {
    //Transaction | VersionedTransaction
    const result = await solana.signAndSendTransaction(transaction);
    console.log("Transaction sent:", result.signature);
  };

  const switchNetwork = async () => {
    await solana.switchNetwork("devnet");
  };

  return (
    <div className="">
      <div className="border-2">
        <PhantomButton />

        <Button onClick={signAndSendTransaction}>Send Transaction</Button>

        <Button onClick={switchNetwork}>Switch to Devnet</Button>

        {!isAvailable && <p>Solana is not available for the current wallet</p>}
      </div>
    </div>
  );
}
/*<PhantomButton />
    <ReactHookForm1 />
    <Button disabled>
      <Spinner aria-hidden="true" />
      Please wait
    </Button>
*/
