import { View, Text, FlatList, Image, RefreshControl } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'
import EmptyState from '../../components/EmptyState'
import { useState } from 'react'

const Home = () => {
  const [refreshing, setRefreshing] = useState(false)
  const onRefresh = async ()=>{
    setRefreshing(true)
    //re call videos
    setRefreshing(false)
  }
  return (
    <SafeAreaView className='bg-primary h-full'>
      <FlatList 
        data={[{id:1}, {id:2}, {id:3}]}
        keyExtractor={(item) => item.$id}
        renderItem={({item}) => (
          <Text className='text-3xl text-white'>{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View className='my-6 px-4 space-y-6'>
            <View className='justify-between items-start flex-row mb-6'>
              <View>
                <Text className='font-semibold text-sm text-gray-100'>Welcome back</Text>
                <Text className='text-2xl font-bold text-white'>eamon005</Text>
              </View>
              <View>
                <Image source={images.logoSmall} className='w-9 h-10' resizeMode='contain'/>
              </View>
            </View>
            <SearchInput placeholder={'Serach for a video topic'}/>
            <View className='w-full flex-1 pt-5 pb-8'>
              <Text className='text-gray-100 text-lg mb-3'>Latest Videos</Text>
              <Trending posts={[{id:1}, {id:2}, {id: 3}] ?? []}/>
            </View>
          </View>
        )}
        ListEmptyComponent={()=>(
          <EmptyState title='No Videos Found' subtitle='Be the first one to uploade video'/>
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
      />
    </SafeAreaView>
  )
}

export default Home