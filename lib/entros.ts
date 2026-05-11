import { PulseSDK } from "@entros/pulse-sdk";

//https://github.com/entros-protocol/pulse-sdk
//(method) PulseSDK.verify(touchElement?: HTMLElement | undefined, wallet?: any, connection?: any): Promise<VerificationResult>
//Run a full verification with automatic timed capture (backward-compatible). Captures all sensors in parallel for DEFAULT_CAPTURE_MS, then processes.

export const entrosVerify = async (
  touchElement: HTMLElement,
  walletAdapter?: any,
  connection?: any,
) => {
  const pulse = new PulseSDK({ cluster: "devnet" });
  const result = await pulse.verify(touchElement, walletAdapter, connection);

  if (result.success) {
    console.log("Verified:", result.txSignature);
  }
};

export const entrosWalletless = async (
  touchElement?: HTMLElement | undefined,
  walletAdapter?: any,
  connection?: any,
) => {
  const pulse = new PulseSDK({
    cluster: "devnet",
    relayerUrl: "https://api.entros.io/relay",
    wasmUrl: "/circuits/entros_hamming.wasm",
    zkeyUrl: "/circuits/entros_hamming_final.zkey",
  });
  const result = await pulse.verify(touchElement, walletAdapter, connection);
  return result;
};
