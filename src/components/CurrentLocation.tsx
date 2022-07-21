import React from 'react';
import {View, Text} from 'react-native';
import {Location} from '../types/common';
import styles from '../styles/styles';

type Props = {
  data: Location;
};

const CurrentLocation: React.FC<Props> = ({data}) => {
  const nameArray = data.name.split(' ');

  return (
    <View style={styles.rowBetween}>
      <View style={styles.currentTag}>
        <Text style={styles.currentText}>
          {nameArray?.[0]?.[0] || 'NA'}
          {nameArray?.[1]?.[0] || ''}
        </Text>
      </View>
      <View style={styles.textWrap}>
        <Text style={styles.header} numberOfLines={1}>
          {data.name}
        </Text>
        <Text style={styles.subHeader}>{data.time}</Text>
      </View>
    </View>
  );
};

export default CurrentLocation;
