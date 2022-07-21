import React, {useState} from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';

import {Location} from '../types/common';
import styles from '../styles/styles';

type Props = {
  history: Location[];
};

const LocationHistory: React.FC<Props> = ({history}) => {
  const [listItem, setListItem] = useState<Location>();
  const [historyData, setHistoryData] = useState(history);

  const handleClearItem = () => {
    const newHistory = history.filter(item => item.id !== listItem?.id);
    setHistoryData(newHistory);
  };

  return (
    <FlatList
      data={history ?? historyData}
      renderItem={({item}) => {
        setListItem(item);
        return (
          <View style={styles.locHistoryContainer}>
            <View>
              <Text style={styles.header} numberOfLines={1}>
                {item.name}
              </Text>
              <Text style={styles.subHeader}>{item.time}</Text>
            </View>
            <View>
              <TouchableOpacity
                style={styles.clearbtn}
                onPress={handleClearItem}>
                <Text style={styles.clearTxt}>Clear</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      }}
    />
  );
};

export default LocationHistory;
