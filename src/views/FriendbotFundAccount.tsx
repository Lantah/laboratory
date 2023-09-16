import { useDispatch } from "react-redux";
import {
  updateFriendbotTarget,
  startFriendbotRequest,
} from "actions/accountCreator";
import { CodeBlock } from "components/CodeBlock";
import PubKeyPicker from "components/FormComponents/PubKeyPicker";
import NETWORK from "constants/network";
import { useRedux } from "hooks/useRedux";
import { useIsSoroban } from "hooks/useIsSoroban";
import { ActionStatus } from "types/types.d";

export const FriendbotFundAccount = () => {
  const { accountCreator, network } = useRedux("accountCreator", "network");
  const { friendbotStatus, friendbotTarget } = accountCreator;
  const baseURL = network.current.orbitrURL;
  const IS_TESTNET = baseURL === NETWORK.available.test.orbitrURL;
  const isSoroban = useIsSoroban();

  const dispatch = useDispatch();

  const getMessageAlertType = (status: ActionStatus) => {
    switch (status) {
      case ActionStatus.LOADING:
        return "s-alert--info";
      case ActionStatus.SUCCESS:
        return "s-alert--success";
      case ActionStatus.FAILURE:
        return "s-alert--alert";
      default:
        return "";
    }
  };

  const renderFriendbotResultCodeblock = () => {
    if (friendbotStatus.code) {
      <CodeBlock
        className="AccountCreator__spaceTop"
        code={friendbotStatus.code}
        language="json"
      />;
    }

    return null;
  };

  const renderFriendbotMessage = () => {
    if (friendbotStatus.message) {
      return (
        <div
          className={`s-alert AccountCreator__friendbot__alert ${getMessageAlertType(
            friendbotStatus.status,
          )}`}
        >
          {friendbotStatus.message}
        </div>
      );
    }

    return null;
  };

  if (IS_TESTNET || isSoroban) {
    return (
      <div
        className="so-back AccountCreator__section"
        data-testid="page-friendbot"
      >
        <div className="so-chunk">
          <h3>
            Friendbot: Fund a {isSoroban ? "Soroban" : "test"} network account
          </h3>
          <p>
            The friendbot is a orbitr API endpoint that will fund an account
            with 10,000g on the {isSoroban ? "Soroban " : "test"} network.
          </p>

          <PubKeyPicker
            className="picker--spaceBottom"
            value={friendbotTarget}
            onUpdate={(accountId: string) => {
              dispatch(updateFriendbotTarget(accountId));
            }}
            data-testid="friendbot-test-account"
          />

          <button
            className="s-button"
            disabled={friendbotTarget.length === 0}
            onClick={() =>
              dispatch(startFriendbotRequest(friendbotTarget, isSoroban))
            }
          >
            Get test network grams
          </button>

          {renderFriendbotMessage()}
          {renderFriendbotResultCodeblock()}
        </div>
      </div>
    );
  }

  return null;
};
