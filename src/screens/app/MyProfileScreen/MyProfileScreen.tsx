import { AppTabScreenProps } from 'src/routes/navigationType';

import { Screen, Text } from '@components';

export function MyProfileScreen({}: AppTabScreenProps<'MyProfileScreen'>) {
  return (
    <Screen>
      <Text preset="headingSmall">My Profile Screen</Text>
    </Screen>
  );
}
