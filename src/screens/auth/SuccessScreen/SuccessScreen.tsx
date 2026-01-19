import { Button, Icon, Screen, Text } from '@components';
import { AuthScreenProps } from '@routes';

export function SuccessScreen({
  navigation,
  route,
}: AuthScreenProps<'SuccessScreen'>) {
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
