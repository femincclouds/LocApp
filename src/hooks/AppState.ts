import {useContext} from 'react';

import {AppContext} from '../state/AppContext';

export const useAppState = () => {
  return useContext(AppContext)?.state;
};
