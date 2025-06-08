import { Button } from 'react-native'

export function ButtonNav({
  title,
  onPress,
}: Readonly<{ title: string; onPress: () => void }>) {
  return <Button title={title} onPress={onPress} />
}
