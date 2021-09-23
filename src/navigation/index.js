import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {login} from '../redux/reducers';
import ThemeProvider from '../Utils/theme';
import {Loading} from '../components';
import {Product, Products, Cart, Login} from '../views';

const {Navigator, Screen} = createStackNavigator();
const MainStack = createStackNavigator();

const App = () => {
  const dispatch = useDispatch();
  const {
    auth: {token, loading},
  } = useSelector(state => state);

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        const userToken = await AsyncStorage.getItem('token');
        userToken && dispatch(login());
      } catch (e) {}
    };
    bootstrapAsync();
  }, []);

  const AuthNavigator = () => (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Login" component={Login} />
    </Navigator>
  );

  if (loading) {
    return <Loading active={loading} />;
  }

  return (
    <ThemeProvider>
      <NavigationContainer>
        {token ? (
          <MainStack.Navigator
            initialRouteName="Products"
            screenOptions={{
              headerShown: false,
              headerStyle: {elevation: 0},
              cardStyle: {backgroundColor: 'white'},
            }}>
            <MainStack.Screen name="Products" component={Products} />
            <MainStack.Screen name="Product" component={Product} />
            <MainStack.Screen name="Cart" component={Cart} />
          </MainStack.Navigator>
        ) : (
          <AuthNavigator />
        )}
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
