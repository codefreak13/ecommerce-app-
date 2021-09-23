import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const commonStyles = {
  padding: RFValue(12),
  fontSize: RFValue(14),
};

export default createStyles = theme =>
  StyleSheet.create({
    main: {
      backgroundColor: theme.colors.primary,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textInput: {
      width: '90%',
      marginVertical: RFValue(10),
      borderWidth: 1,
      borderColor: theme.colors.loginBorder,
      borderRadius: RFValue(4),
      ...commonStyles,
    },
    btn: {
      alignSelf: 'center',
      padding: RFValue(20),
      backgroundColor: theme.colors.bar,
      width: '90%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: RFValue(50),
    },
    btnText: {
      color: theme.colors.text,
      fontSize: RFValue(14),
      fontWeight: 'bold',
    },
  });
