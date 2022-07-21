import {AppState, Action} from '../types/common';
import {SET_LOCATION} from './types';

export const initState: AppState = {
  currentLocation: {
    id: '',
    name: '',
    time: '',
  },
  locationHistory: [],
};

export function reducer(state = initState, action: Action): AppState {
  switch (action.type) {
    case SET_LOCATION:
      return action.payload;
    default:
      return state;
  }
}
