import {useEffect, useState} from 'react';

const TIMEOUT = 60000 * 5;

export const useInterval = (fn: Function, delay = TIMEOUT) => {
  const [timer, setTimer] = useState<NodeJS.Timer | null>(null);

  useEffect(() => {
    fn?.();
    const timerId = setInterval(() => {
      fn?.();
    }, delay);
    setTimer(timerId);

    return () => {
      if (timer) clearInterval(timer);
    };
  }, []);
};
