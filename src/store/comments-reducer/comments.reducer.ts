import { ACTIONS } from "../actions.config";

export const initCommentsState = {
  commentsContainer: []
};

interface IProps {
  type: string; // what am i doing
  payload: any; // what am i sending
}

export default function commentsReducer(state: any = initCommentsState, action: IProps) {
  switch (action.type) {
    case ACTIONS.ADD_COMMENT: {
      const { payload } = action;
      return { ...state, commentsContainer: [...state.commentsContainer, payload ] };
    }
    default: {
      return state;
    }
  }
}
