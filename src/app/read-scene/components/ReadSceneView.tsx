import { TextBox } from '@ui'
import React from 'react'
import { ScrollView, View } from 'react-native'

export const ReadSceneView = ({ children }: { children: React.ReactNode }) => (
  <View
    style={{
      flex: 1,
      justifyContent: 'flex-start',
      height: '100%',
    }}
  >
    <ScrollView>
      <TextBox>{children}</TextBox>
    </ScrollView>
  </View>
)
