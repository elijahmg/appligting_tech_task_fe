import { INITIALIZE_SESSION } from '../constants';
import { Session, SessionAction } from '../types/session';

const initialState: Session = {
  session: '',
};

/**
 * Session reducer
 * @param {Session} state
 * @param {SessionAction} action
 */
export function session(state = initialState, action: SessionAction): Session {
  switch (action.type) {
    case INITIALIZE_SESSION:
      return {
        ...state,
        session: action.session,
      };

    default:
      return state;
  }
}