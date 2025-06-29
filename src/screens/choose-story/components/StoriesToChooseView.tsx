import { ShortListOfStories, ShortStory } from '@types'
import { AboveNavWrapper, Paragraph, ScreenWithNav, Title } from '@ui'
import { FlatList, TouchableHighlight, View } from 'react-native'

const renderItem = (
  item: ShortStory,
  onSelect: (key: string | number) => void,
) => (
  <TouchableHighlight
    onPress={() => onSelect(item.reference)}
    key={JSON.stringify(item)}
    testID={`book-${item.reference}`}
  >
    <View>
      <Title>{item.name}</Title>
      <Paragraph>{item.text}</Paragraph>
    </View>
  </TouchableHighlight>
)

export const StoriesToChooseView = ({
  books,
  onSelect,
}: {
  books: ShortListOfStories
  onSelect: (key: string | number) => void
}) => (
  <ScreenWithNav>
    <AboveNavWrapper>
      <FlatList
        data={books}
        renderItem={({ item }) => renderItem(item, onSelect)}
      />
    </AboveNavWrapper>
  </ScreenWithNav>
)
