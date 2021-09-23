import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default createStyles = theme =>
  StyleSheet.create({
    main: {
      borderRadius: RFValue(18),
      height: RFValue(18),
      width: RFValue(18),
      borderWidth: 1,
      borderColor: theme.colors.text,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
