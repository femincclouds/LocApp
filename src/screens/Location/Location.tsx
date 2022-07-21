import React, {useRef, useEffect, useState} from 'react';
import {View, Text, Alert, TouchableOpacity} from 'react-native';
import moment from 'moment';
import {useAppState} from '../../hooks/AppState';
import {useDispatch} from '../../hooks/Dispatch';
import {useInterval} from '../../hooks/Interval';
import {getLocation, getNewLocationHistory} from '../../utils/common';
import {getLocationDetails, checkHttpStat} from '../../actions/index';
import {SET_LOCATION} from '../../state/types';
import {AppState} from '../../types/common';
import styles from '../../styles/styles';
import CurrentLocation from '../../components/CurrentLocation';
import LocationHistory from '../../components/LocationHistory';
import Geolocation from '@react-native-community/geolocation';

const Location: React.FC = () => {
  const [position, setPosition] = useState<any>();
  const state = useAppState();
  const dispatch = useDispatch();
  const stateRef = useRef<AppState | null>(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const initialPosition = JSON.stringify(position);
        setPosition({initialPosition});
      },
      error => Alert.alert('Error', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
    const watchID = Geolocation.watchPosition(position => {
      const lastPosition = JSON.stringify(position);
      setPosition({lastPosition});
    });
    return () => {
      watchID != null && Geolocation.clearWatch(watchID);
    };
  }, []);

  const saveCurrentLocation = async () => {
    const data = await getLocation();
    if (data) {
      const locationDetails = await getLocationDetails(
        data.latitude,
        data.longitude,
      );
      if (locationDetails.success) {
        const statusData = await checkHttpStat(locationDetails.data);
        if (statusData.success && state) {
          const newHistory = getNewLocationHistory(
            stateRef.current?.currentLocation || state.currentLocation,
            stateRef.current?.locationHistory || state.locationHistory,
          );
          const time = moment();
          dispatch?.({
            type: SET_LOCATION,
            payload: {
              currentLocation: {
                id: time.format('MM:SS'),
                name: locationDetails.data,
                time: `${time.format('DD/MM/YYYY')}, ${time.format(
                  'HH:MM:SS',
                )}`,
              },
              locationHistory: newHistory,
            },
          });
        } else {
          Alert.alert('Error', statusData.data);
        }
      } else {
        Alert.alert('Error', locationDetails.data);
      }
    }
  };

  useInterval(() => {
    saveCurrentLocation();
  }, 10000);

  useEffect(() => {
    stateRef.current = state || null;
  }, [state?.currentLocation?.id]);

  if (!state) return null;

  const handleClearAllLocation = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Location Manager</Text>
      <Text style={styles.subHeader}>Current Location</Text>
      <CurrentLocation data={state.currentLocation} />
      <Text style={styles.subHeader}>Previous Locations</Text>
      <LocationHistory history={state.locationHistory} />
      <TouchableOpacity
        style={styles.clearAll}
        onPress={handleClearAllLocation}>
        <Text style={styles.clearText}>Clear All</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Location;
