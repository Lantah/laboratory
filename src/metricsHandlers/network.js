import { SET_PARAMS } from "../actions/network";
import { logEvent } from "../helpers/metrics";

const metricsEvents = {
  changeNetwork: "pick network: changed orbitr url",
};

export default function networkMetrics(state, action) {
  const { type, ...payload } = action;
  switch (type) {
    case SET_PARAMS: {
      logEvent(metricsEvents.changeNetwork, {
        orbitrUrl: payload.params.orbitrURL,
      });
    }
  }
}
