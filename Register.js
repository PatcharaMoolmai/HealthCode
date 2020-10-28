import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ImageBackground } from 'react-native';

export default function Register() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageBg} source={require('./assets/wallpaper/BG.png')}>
        <Text style={styles.logoText}>Logo</Text>
        <TextInput  
          placeholder="Email"
          style={styles.textBox}
          onChangeText={text=>onChangeText(text)}
          // value={value}
          />
        <TextInput  
          placeholder="Username"
          style={styles.textBox}
          onChangeText={text=>onChangeText(text)}
          // value={value}
          />
          <TextInput  
          placeholder="Password"
          style={styles.textBox}
          onChangeText={text=>onChangeText(text)}
          // value={value}
          />
        <TouchableOpacity
          onPress={() => alert('Hello, world!')}
          style={styles.loginButton}>
          <Text style={{ fontSize: 20, color: '#fff' }}>Login</Text>
        </TouchableOpacity>
        <Text>
          <TouchableOpacity onPress={() => alert('Register page, but its feature')}>
          <Text style={{ fontSize: 15, color: 'black' }}>Forget password</Text>
          </TouchableOpacity>
          <Text>   </Text>
          <TouchableOpacity onPress={() => alert('Register page, but its feature')}>
          <Text style={{ fontSize: 15, color: '#2CF0FF' }}>Register</Text>
          {/* <Register ref={ref => (this._registePage = ref)} /> */}
          </TouchableOpacity>
        </Text>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText :{
    fontSize :70,
    marginBottom:320
  },
  textBox:{
    height: 40,
    width: 250,
    // borderColor: 'black',
    // borderWidth: 1,
    marginBottom : 10,
    backgroundColor:'#fff',
    borderRadius:20,
    padding:10
  },
  loginButton:{
    height: 40,
    width: 220,
    marginTop:10,
    marginBottom:20,
    backgroundColor:'#24BFCB',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:20,
  },
  imageBg: {
    // flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // opacity:0.7 
    // backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }
});
