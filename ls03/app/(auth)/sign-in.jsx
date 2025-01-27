import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'

const SignIn = () => {
  const [form, setForm] = useState({email: '', password: ''})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = ()=> {}
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center  min-h-[85vh] px-4 my-6'>
          <Image source={images.logo} className='w-[115px] h-[35px]' resizeMode='contain'/>
          <Text className='text-3xl text-white text-bold mt-10'>Log in to Aora</Text>

          <FormField title='Email' value={form.email} handleChangeText={(e) => setForm({...form, email: e})} otherStyles="mt-7" keyboardType='email-address'/>
          <FormField title='Password' value={form.password} handleChangeText={(e) => setForm({...form, password: e})} otherStyles="mt-7"/>
          
          <CustomButton title='Sign in' handlePress={submit} containerStyles='mt-14' isLoading={isSubmitting}/>
          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-lg text-gray-100'>Don't have account?</Text>
            <Link href='/sign-up' className='text-lg text-secondary font-bold'>Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn