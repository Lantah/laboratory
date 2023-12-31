import isEqual from "lodash/isEqual";
import pick from "lodash/pick";
import { useSelector } from "react-redux";

/**
 * A React hook for accessing Redux state.
 *
 * react-redux's useStore hook isn't performant, has a weird call signature,
 * and doesn't instruct components when to update:
 *
 * const { stellarAccount } = useStore().getState();
 *
 * useSelector is stupidly verbose:
 *
 * const {
 *   stellarAccount
 * } = useSelector(({ stellarAccount }) => ({ stellarAccount }));
 *
 * So instead, let's use a clearer API:
 *
 * const { stellarAccount } = useRedux("stellarAccount");
 *
 * @param {string[]} stateProps An array of prop names to get from the state.
 * @returns {object} An object map of those prop names to their values.
 */
// TODO: update any types after store refactor
export function useRedux(...keys: any[]) {
  return useSelector((state: any) => pick(state, keys), isEqual);
}
