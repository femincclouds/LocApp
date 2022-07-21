import {useContext} from 'react';

import {AppContext} from '../state/AppContext';

export const useDispatch = () => {
  return useContext(AppContext)?.dispatch;
};
