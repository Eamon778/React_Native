import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import iceCoffeeImage from '@/assets/images/iced-coffee.png'
import { Link } from 'expo-router'

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={iceCoffeeImage} style={styles.image}>
      <Text style={styles.text}>Coffee Shop</Text>
      <Link href="/contact" style={{marginHorizontal: 'auto'}} asChild>
        <Pressable style={styles.button}><Text style={styles.buttonText}>Contact us</Text></Pressable>
      </Link>
      </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginBottom: 120,
  },
  link: {
    color: '#fff',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    padding: 4,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  button: {
    height: 60,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.75)',
    justifyContent: 'center',
    padding: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4,
  },
})