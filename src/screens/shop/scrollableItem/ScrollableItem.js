import React from 'react'
import {styles} from './style'
import ScrollItem from './components/ScrollItem'
import {FlatList, View} from 'react-native'
export default function ScrollableItem({
  loadeIt,
  setSelectedId,
  selectedId,
  navigation,
}) {
  const list = [
    {
      title: 'All',
      icon: null,
    },
    {
      title: 'Outdoor',
      icon: null,
    },
    {
      title: 'Indoor',
      icon: null,
    },
    {
      title: 'Big plants',
      icon: null,
    },
    {
      title: 'Big things',
      icon: null,
    },
    {
      title: 'Little things',
      icon: null,
    },
  ]

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={list}
        extraData={(_, index) => index.toString()}
        renderItem={({item, index}) => (
          <ScrollItem
            data={item}
            navigation={navigation}
            onPress={() => {
              setSelectedId(index)
              loadeIt()
            }}
            isSelected={index === selectedId}
          />
        )}
      />
    </View>
  )
}
