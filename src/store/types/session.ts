import { INITIALIZE_SESSION } from '../constants';

export interface Session {
  session: string,
}

export interface SessionAction {
  type: typeof INITIALIZE_SESSION,
  session: string,
}