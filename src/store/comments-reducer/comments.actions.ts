import { ACTIONS } from "../actions.config";

export function addCommentAction(payload: string) {
  return {
    type: ACTIONS.ADD_COMMENT,
    payload,
  };
}
