import { useState } from 'react';

import { TextInput, TextInputProps, Icon } from '@components';

export type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;

export function PasswordInput(props: PasswordInputProps) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);
  return (
    <TextInput
      {...props}
      secureTextEntry={isSecureTextEntry}
      RightComponent={
        <Icon
          name={isSecureTextEntry ? 'eyeOn' : 'eyeOff'}
          onPress={() => setIsSecureTextEntry(prev => !prev)}
        />
      }
    />
  );
}
