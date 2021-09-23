import React, {useEffect, useState, useMemo} from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  Switch,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Logout from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Header, Loading, EmptyContent} from '../../components';
import {sagaActions} from '../../redux/sagaActions';
import {logout} from '../../redux/reducers';
import {useTheme} from '../../Utils/theme';
import createStyles from './styles';
import Product from './Product';

const Products = ({navigation}) => {
  let _isMounted = false;

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const {primary, text} = theme.colors;

  const dispatch = useDispatch();
  const {
    products: {data, categories, loading},
  } = useSelector(state => state);

  const [refresh, setrefresh] = useState(false);
  const [form, setForm] = useState({category: ''});
  const [sort, setSort] = useState({sortToggle: true});
  const {sortToggle} = sort;
  const sortValue = sortToggle ? 'up' : 'down-alt';
  const sortType = sortToggle ? 'asc' : 'desc';
  const allCategories = ['All', ...categories];
  const categoryType = allCategories[form.category];

  const fetchData = async () => {
    setrefresh(true);
    dispatch({type: sagaActions.FETCH_PRODUCTS, payload: {sortType}});
    dispatch({type: sagaActions.FETCH_PRODUCTS_CATEGORY});
    setrefresh(false);
  };

  const fetchDataByCategory = async () => {
    dispatch({
      type: sagaActions.FETCH_PRODUCTS_BY_CATEGORY,
      payload: {categoryType, sortType},
    });
  };

  const signout = async () => {
    await AsyncStorage.removeItem('token');
    dispatch(logout());
  };

  const toggle = () => {
    setSort({sortToggle: !sort.sortToggle});
  };

  const onChangeFormValue = field => value =>
    setForm(prevState => ({...prevState, [field]: value}));

  useEffect(() => {
    _isMounted = true;

    _isMounted && Number(form?.category) >= 1
      ? fetchDataByCategory()
      : fetchData();

    return () => {
      _isMounted = false;
    };
  }, [form, sortValue]);

  const renderItem = ({item}) => (
    <Product product={item} navigation={navigation} dispatch={dispatch} />
  );

  const memoizedValue = useMemo(() => renderItem, [data]);

  const {setScheme, isDark} = useTheme();

  const toggleScheme = () => {
    isDark ? setScheme('light') : setScheme('dark');
  };

  return (
    <>
      <Header icon title="Omnibiz Store" navigation={navigation} home />
      <View style={styles.main}>
        <View style={styles.filterBar}>
          <View style={styles.pickerMain}>
            <Icon name="filter" size={15} color={text} />
            <Picker
              style={styles.picker}
              onValueChange={onChangeFormValue('category')}
              selectedValue={form.category}>
              {allCategories?.map((item, index) => {
                return (
                  <Picker.Item
                    label={item.toUpperCase()}
                    value={index}
                    key={index}
                  />
                );
              })}
            </Picker>
          </View>
          <Icon
            name={`sort-alpha-${sortValue}`}
            size={20}
            onPress={toggle}
            color={text}
          />
        </View>
        <Switch value={isDark} onValueChange={toggleScheme} />

        <FlatList
          keyExtractor={item => item.id * Math.random()}
          data={data}
          initialNumToRender={5}
          renderItem={memoizedValue}
          refreshControl={
            <RefreshControl refreshing={refresh} onRefresh={fetchData} />
          }
          style={styles.list}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyContent text="No product" />}
        />

        <TouchableOpacity style={styles.logout} onPress={signout}>
          <Logout name="log-out" size={20} color={primary} />
        </TouchableOpacity>
      </View>
      <Loading active={loading} />
    </>
  );
};

export default Products;
