import React, {useMemo} from 'react';
import {View, Text, Pressable, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {Header, EmptyContent} from '../../components';
import {useTheme} from '../../Utils/theme';
import createStyles from './styles';
import CartItem from './CartItem';

export default Cart = ({navigation}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const dispatch = useDispatch();
  const {
    cart: {cart},
  } = useSelector(state => state);

  return (
    <View style={styles.main}>
      <Header icon title="Shopping Cart" navigation={navigation} />
      <FlatList
        keyExtractor={item => item.id * Math.random()}
        data={cart}
        renderItem={({item, index}) => (
          <CartItem product={item} key={index} dispatch={dispatch} />
        )}
        style={styles.list}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<EmptyContent text="Cart is Empty" />}
      />
      {cart.length > 0 && (
        <Pressable style={styles.checkout}>
          <Text style={styles.checkoutText}>Proceed To Checkout</Text>
        </Pressable>
      )}
    </View>
  );
};
