import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Pressable } from 'react-native';
import {  router, Link } from 'expo-router';

import { Button } from '../components/button';

// index Welcoming page

// this function is button's action  to go to home screen
const handleStart = () => {
  // i put router.replace because i dont want the user come back to this welcoming screen
  router.replace('home');
}
// Button Component from components/button
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Image source={require("../assets/logo.png")} style={styles.logoImg}/>
      <Text style={styles.indexTitle}>Welcome to Enzo's Store</Text>
      <Text style={styles.indexText}>Everything You Need, All in One Place!</Text>
      <Button title='Get Started with Shopping' onPress={handleStart}/>
    </SafeAreaView>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  logoImg: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },

  indexTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    marginTop: 10,
  },
  indexText: {
fontSize: 16,
marginBottom: 10,
  },
  indexBtn: {
    padding: 12,
    backgroundColor: '#206bb9',
    borderRadius: 7,
    marginTop: 10,
  },

  btnText:{
  color: 'white',
  }
});
