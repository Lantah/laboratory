import NETWORK from "constants/network";
import { useRedux } from "hooks/useRedux";

export const useIsSoroban = () => {
  const { network } = useRedux("network", "routing");
  const { orbitrURL, networkPassphrase } = network.current;
  const url = new URL(orbitrURL);

  let isOnFuturenet = false;
  if (
    url.origin === NETWORK.available.futurenet.orbitrURL &&
    networkPassphrase === NETWORK.available.futurenet.networkPassphrase
  ) {
    isOnFuturenet = true;
  }
  return isOnFuturenet;
};
