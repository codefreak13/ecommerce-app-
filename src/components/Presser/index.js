import React, {useMemo} from 'react';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {useTheme} from '../../Utils/theme';
import createStyles from './styles';

export default Press = ({name, action}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const {text, error, bar} = theme.colors;
  return (
    <Pressable
      onPress={() => action(name)}
      style={{...styles.main, backgroundColor: name == 'plus' && text}}>
      <Icon
        name={name}
        size={13}
        color={(name == 'plus' && bar) || (name == 'times' && error)}
      />
    </Pressable>
  );
};
