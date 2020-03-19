import shortid from 'shortid';

import { SessionAction } from '../types/session';

import { INITIALIZE_SESSION } from '../constants';

export function initializeSession(): SessionAction {
  return { type: INITIALIZE_SESSION, session: shortid.generate() }
}