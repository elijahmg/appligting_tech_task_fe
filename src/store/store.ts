import { createStore } from 'redux';
import { session } from './reducers/session';

/** Application store **/
export const store = createStore(session);