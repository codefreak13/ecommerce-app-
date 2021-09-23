import React, {useMemo} from 'react';
import {View, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from 'react-redux';

import {useTheme} from '../../Utils/theme';
import createStyles from './styles';

export default Header = ({title, navigation, home}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const {text} = theme.colors;

  const {
    cart: {cart},
  } = useSelector(state => state);

  return (
    <View style={styles.main}>
      {home ? (
        <View />
      ) : (
        <Icon
          name="chevron-left"
          size={20}
          onPress={() => navigation.goBack()}
        />
      )}
      <Text style={styles.title}>{title}</Text>
      <Pressable onPress={() => navigation.navigate('Cart')}>
        <Icon name="cart-plus" size={20} color={text} />
        {cart.length > 0 && (
          <View style={styles.overlay}>
            <Text style={styles.value}>{cart.length}</Text>
          </View>
        )}
      </Pressable>
    </View>
  );
};
