import axios from 'axios';
import {http, API_KEY} from '../utils/common';
import {APIResponse} from '../types/common';

export const getLocationDetails = async (
  lat: number,
  lng: number,
): Promise<APIResponse> => {
  try {
    const data = await http.get(`?q=${lat}+${lng}&key=${API_KEY}`);
    if (data?.data?.results?.length) {
      const locationObject = data.data.results[0];
      return {
        success: true,
        data: locationObject?.formatted || '',
      };
    }
  } catch (err) {
    return {
      success: false,
      data: 'Request failed',
    };
  }
  return {
    success: false,
    data: 'Data not found',
  };
};

export const checkHttpStat = async (name: string): Promise<APIResponse> => {
  const body: Record<string, string | number> = {
    location_name: name,
    time: new Date().getTime(),
  };

  try {
    const data = await axios.post('https://httpstat.us/200', body);
    if (data?.data?.code === 200) {
      return {
        success: true,
        data: 'OK',
      };
    }
  } catch (err) {}
  return {
    success: false,
    data: 'HTTP check failed',
  };
};
