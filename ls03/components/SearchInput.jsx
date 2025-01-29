import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'

const SearchInput = ({title, value, placeholder, handleChangeText,otherStyles, ...porps}) => {
    const [showPasssword, setShowPassword] = useState(false)
  return (
    <View className='border-2 border-black-200 w-full h-16 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row space-x-4'>
        <TextInput className='text-base ms-3 text-white flex-1' value={value} placeholder={placeholder} placeholderTextColor='#7b7b8b' onChangeText={handleChangeText} secureTextEntry={title === 'Password' && !showPasssword}/>
        <TouchableOpacity>
            <Image source={icons.search} className='w-5 h-5 mr-3' resizeMode='contain'/>
        </TouchableOpacity>
    </View>
  )
}

export default SearchInput