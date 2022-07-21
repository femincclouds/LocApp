import {StyleSheet} from 'react-native';

import {colors, sizes} from '../utils/common';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    paddingHorizontal: '3%',
  },
  clearAll: {
    padding: 10,
    backgroundColor: 'blue',
    margin: 10,
    alignItems: 'center',
  },
  clearText: {
    color: 'white',
    fontWeight: '600',
  },
  locHistoryContainer: {
    flexDirection: 'row',
  },
  clearbtn: {
    padding: 5,
    backgroundColor: 'grey',
    alignItems: 'center',
    marginBottom: 5,
  },
  clearTxt: {
    color: '#000',
    fontWeight: '500',
  },
  header: {
    color: colors.black,
    fontSize: sizes.xxl,
    marginBottom: sizes.xs,
    fontWeight: 'bold',
  },
  subHeader: {
    color: colors.text,
    fontSize: sizes.l,
    marginBottom: sizes.xs,
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  currentTag: {
    backgroundColor: 'orange',
    height: sizes.s * 5,
    width: sizes.s * 5,
    borderRadius: sizes.s * 2.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: sizes.s,
  },
  currentText: {
    fontSize: sizes.xxl,
    fontWeight: 'bold',
    color: colors.white,
  },
  textWrap: {
    flex: 1,
  },
});

export default styles;
