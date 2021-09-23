import React, {useMemo} from 'react';
import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Rating} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {add} from '../../redux/reducers';
import {useTheme} from '../../Utils/theme';
import createStyles from './styles';

export default Product = ({
  product,
  product: {
    title,
    image,
    price,
    rating: {count, rate},
  },
  navigation,
  dispatch,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const {border, text} = theme.colors;
  return (
    <Pressable
      style={styles.productContainer}
      onPress={() => {
        navigation.navigate('Product', {
          product,
        });
      }}>
      <FastImage
        style={styles.image}
        source={{
          uri: image,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.productDetails}>
        <Text style={styles.countText}>{title}</Text>
        <Text style={{...styles.countText, marginVertical: 10}}>${price}</Text>
        <View style={styles.ratingContainer}>
          <Rating
            startingValue={rate}
            fractions={1}
            imageSize={17}
            showRating
            tintColor={border}
            style={{height: 50}}
          />
          <View style={styles.count}>
            <Icon name="heart" color={text} size={18} />
            <Text style={styles.countText}>{count}</Text>
          </View>
          <TouchableOpacity
            style={styles.cartButton}
            onPress={() => {
              dispatch(add(product));
              navigation.navigate('Cart');
            }}>
            <Text style={styles.cartText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Pressable>
  );
};
