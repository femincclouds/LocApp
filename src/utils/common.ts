import GetLocation, {Location} from 'react-native-get-location';
import {Location as LocationItem} from '../types/common';
import axios from 'axios';

export const API_KEY: string = '4107c833d13f4eb186a631ed719a10e5';

export const colors = {
  primary: '#8e44ad',
  white: '#ffffff',
  black: '#000000',
  text: '#777777',
};

export const sizes = {
  xxs: 5,
  xs: 7.5,
  s: 10,
  m: 12.5,
  l: 15,
  xl: 17.5,
  xxl: 20,
};

const LIMIT = 30;

export const getLocation = async (): Promise<Location | null> => {
  try {
    const data = await GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    });
    return data;
  } catch (err) {
    return null;
  }
};

export const getNewLocationHistory = (
  currentLocation: LocationItem,
  locationHistory: LocationItem[],
): LocationItem[] => {
  const newHistory = currentLocation?.id
    ? [currentLocation, ...locationHistory]
    : [...locationHistory];
  if (locationHistory.length >= LIMIT) {
    newHistory.pop();
  }
  return newHistory;
};

export const http = axios.create({
  baseURL: `https://api.opencagedata.com/geocode/v1/json`,
});
