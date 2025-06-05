import React from 'react'
import { Text, View } from 'react-native'

export const ReadSceneView = ({ children }: { children: React.ReactNode }) => (
  <View>
    <Text>{children}</Text>
  </View>
)
