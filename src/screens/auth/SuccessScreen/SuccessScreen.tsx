import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Button, Icon, Screen, Text } from '@components'
import { RootStackParamList } from '@routes'

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export function SuccessScreen({ navigation, route }: ScreenProps) {
  return (
    <Screen>
      <Icon {...route.params?.icon} />
      <Text preset="headingLarge" mt="s24">
        {route.params?.title}
      </Text>
      <Text preset="paragraphLarge" mt="s16">
        {route.params?.description}
      </Text>
      <Button onPress={navigation.goBack} title="Voltar ao início" mt="s40" />
    </Screen>
  );
}
