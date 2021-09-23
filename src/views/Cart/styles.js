import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default createStyles = theme =>
  StyleSheet.create({
    main: {
      width: '100%',
      flex: 1,
      backgroundColor: theme.colors.primary,
    },
    item: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      paddingHorizontal: RFValue(15),
      backgroundColor: theme.colors.border,
      paddingVertical: RFValue(5),
      marginVertical: RFValue(2),
    },
    image: {
      width: RFValue(80),
      height: RFValue(80),
      borderRadius: RFValue(8),
      overflow: 'hidden',
      borderWidth: 1,
    },
    details: {
      width: '75%',
      paddingRight: RFValue(10),
    },
    title: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      paddingVertical: RFValue(10),
    },
    titleText: {
      color: theme.colors.text,
    },
    value: {
      fontWeight: 'bold',
    },
    price: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
    },
    delete: {
      position: 'relative',
      bottom: RFValue(10),
    },
    toggle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '30%',
    },
    checkout: {
      paddingVertical: RFValue(18),
      marginHorizontal: RFValue(20),
      borderRadius: RFValue(25),
      position: 'absolute',
      bottom: RFValue(30),
      right: RFValue(10),
      left: RFValue(10),
      backgroundColor: theme.colors.text,
    },
    value: {
      fontWeight: 'bold',
      fontSize: RFValue(17),
      color: theme.colors.text,
    },
    list: {
      flex: 1,
      width: '100%',
    },
    checkoutText: {
      alignSelf: 'center',
      color: theme.colors.primary,
      fontWeight: '500',
      fontSize: RFValue(15),
    },
  });
