import { useDisconnect, useModal, usePhantom } from "@phantom/react-sdk";
import { ll } from "@/lib/utils";
import { Button } from "./ui/button";

//https://docs.phantom.com/sdks/react-sdk/index#available-hooks

export const PhantomButton = () => {
  const { open, close, isOpened } = useModal();
  const { isConnected, user } = usePhantom();

  const { disconnect, isDisconnecting, error } = useDisconnect();
  if (error) ll("disconnect error:", error);

  if (isConnected) {
    ll("user:", user?.addresses[0]?.address);
    return (
      <div>
        <p>Connected User: {user?.addresses[0]?.address}</p>
        <Button type="button" onClick={disconnect}>
          Disconnect
        </Button>
      </div>
    );
  }

  return (
    <div>
      <Button type="button" onClick={open}>
        Connect Wallet
      </Button>
    </div>
  );
};
