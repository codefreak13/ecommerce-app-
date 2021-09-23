import React, {useMemo} from 'react';
import {View, Text, Image, ScrollView, Pressable} from 'react-native';
import {Rating} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useDispatch} from 'react-redux';

import {Header} from '../../components';
import {add} from '../../redux/reducers';
import {useTheme} from '../../Utils/theme';
import createStyles from './styles';

export default Product = ({
  route: {
    params: {
      product,
      product: {
        title,
        image,
        price,
        description,
        rating: {count, rate},
      },
    },
  },
  navigation,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const {border, text} = theme.colors;

  const dispatch = useDispatch();
  return (
    <>
      <Header icon title="Product Details" navigation={navigation} />
      <ScrollView style={styles.main}>
        <View style={styles.productContainer}>
          <Image
            style={styles.image}
            source={{
              uri: image,
            }}
          />
          <View style={styles.productDetails}>
            <Text style={styles.productText}>{title}</Text>
            <Text style={styles.productText}>{description}</Text>
            <Text style={styles.productText}>${price}</Text>
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
            </View>
          </View>
          <Pressable
            style={styles.cartButton}
            onPress={() => {
              dispatch(add(product));
              navigation.navigate('Cart');
            }}>
            <Text style={styles.cartText}>Add to Cart</Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
};
