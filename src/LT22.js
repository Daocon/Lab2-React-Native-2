import {useRef} from 'react';
import {Button, TextInput, View} from 'react-native';

const LT22 = () => {
  const inputRef = useRef(null);
  const focusInput = () => {
    inputRef.current.focus();
  };
  return (
    <View>
      <TextInput ref={inputRef} />
      <Button title="Focus Input" onPress={focusInput} />
    </View>
  );
};

export default LT22;
