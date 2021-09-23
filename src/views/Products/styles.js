import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default createStyles = theme =>
  StyleSheet.create({
    main: {
      flex: 1,
      padding: RFValue(10),
      backgroundColor: theme.colors.primary,
    },
    productContainer: {
      backgroundColor: theme.colors.primary,
      borderRadius: RFValue(8),
      overflow: 'hidden',
      marginVertical: RFValue(10),
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    image: {
      aspectRatio: 1.3,
      resizeMode: 'contain',
      width: '100%',
    },
    productDetails: {
      paddingTop: RFValue(15),
      paddingLeft: RFValue(10),
      backgroundColor: theme.colors.border,
    },
    ratingContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingBottom: RFValue(20),
      paddingRight: RFValue(10),
    },
    count: {
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: RFValue(10),
      height: RFValue(68),
    },
    countText: {
      color: theme.colors.text,
      fontWeight: '500',
    },
    cartButton: {
      backgroundColor: 'black',
      width: '35%',
      borderRadius: RFValue(5),
      alignItems: 'center',
      justifyContent: 'center',
    },
    cartText: {
      color: 'white',
      fontWeight: '600',
    },
    filterBar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginHorizontal: RFValue(15),
      backgroundColor: theme.colors.primary,
    },
    pickerMain: {
      flexDirection: 'row',
      width: '80%',
      alignItems: 'center',
    },
    picker: {
      width: '80%',
      marginLeft: RFValue(-5),
      color: theme.colors.text,
    },
    list: {
      flex: 1,
      width: '100%',
      marginTop: RFValue(10),
    },
    logout: {
      borderRadius: RFValue(50),
      width: RFValue(50),
      height: RFValue(50),
      backgroundColor: theme.colors.cart,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: RFValue(50),
      left: RFValue(300),
    },
  });
