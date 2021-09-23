import React, {useState, useMemo} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {sagaActions} from '../../redux/sagaActions';

import {useTheme} from '../../Utils/theme';
import createStyles from './styles';

export default Login = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const dispatch = useDispatch();

  const [form, setForm] = useState({username: '', password: ''});

  const onChangeFormValue = field => value =>
    setForm(prevState => ({...prevState, [field]: value}));

  const {username, password} = form;

  const userLogin = () => {
    username &&
      password &&
      dispatch({type: sagaActions.USER_LOGIN, payload: {username, password}});
  };

  return (
    <View style={styles.main}>
      <TextInput
        onChangeText={onChangeFormValue('username')}
        placeholder="Enter username"
        style={styles.textInput}
        variant="base"
        value={username}
      />
      <TextInput
        onChangeText={onChangeFormValue('password')}
        placeholder="Enter password"
        style={styles.textInput}
        secureTextEntry
        variant="base"
        value={password}
      />
      <TouchableOpacity onPress={userLogin} style={styles.btn}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
