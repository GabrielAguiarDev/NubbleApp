import { ScrollView, View } from 'react-native';

interface Props {
  children: React.ReactNode;
  backgroundColor: string;
}

export function ScrollViewContainer({ children, backgroundColor }: Props) {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={{ flex: 1, backgroundColor }}
    >
      {children}
    </ScrollView>
  );
}

export function ViewContainer({ children, backgroundColor }: Props) {
  return <View style={{ flex: 1, backgroundColor }}>{children}</View>;
}
