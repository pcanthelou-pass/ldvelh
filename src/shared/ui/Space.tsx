import { View } from 'react-native'
import { space } from './constant'

export const Space = ({ count = 1 }: { count?: number }) => (
  <View style={{ height: space * count, width: '100%' }} />
)
