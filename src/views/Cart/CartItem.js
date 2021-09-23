import React, {useState, useMemo} from 'react';
import {View, Text, Image} from 'react-native';

import {Press} from '../../components';
import {remove} from '../../redux/reducers';
import {useTheme} from '../../Utils/theme';
import createStyles from './styles';

const CartItem = ({product, product: {image, title, price}, dispatch}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const [value, setvalue] = useState(1);

  const toggle = name => {
    if (name == 'plus') {
      setvalue(value + 1);
    } else if (value > 1 && name == 'minus') {
      setvalue(value - 1);
    } else {
      dispatch(remove(product));
    }
  };

  return (
    <View style={styles.item}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <View style={styles.details}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{title}</Text>
          <Press name="times" action={toggle} />
        </View>

        <View style={styles.price}>
          <Text style={styles.value}>${(price * value).toFixed(2)}</Text>
          <View style={styles.toggle}>
            <Press name="minus" action={toggle} />
            <Text style={styles.value}>{value}</Text>
            <Press name="plus" action={toggle} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
