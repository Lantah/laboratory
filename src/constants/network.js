import { Networks } from "lantah-sdk";
import { Networks as SorobanNetworks } from "soroban-client";

const NETWORK = {
  available: {
    futurenet: {
      orbitrURL: "https://orbitr-futurenet.lantah.network",
      networkPassphrase: SorobanNetworks.FUTURENET,
    },
    test: {
      orbitrURL: "https://orbitr-testnet.lantah.network",
      networkPassphrase: Networks.TESTNET,
    },
    public: {
      orbitrURL: "https://orbitr.lantah.network",
      networkPassphrase: Networks.PUBLIC,
    },
  },
  defaultName: "test",
};
export default NETWORK;
