import { createStore } from 'redux';
import { session } from './reducers/session';

export const store = createStore(session);