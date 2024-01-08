import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        
        <View style={styles.welcomeIcon}>
        <Image
            source={require('../../assets/best.png')}
            
          />
          </View> 
          
        <Text style={styles.text}>
          Welcome! {'\n'}
          <Text style={styles.secondaryText}>
            Before enjoying Foodmedia services, please register first
          </Text>
        </Text>
        <TouchableOpacity style={styles.accountButton}>
          <Text style={{ color: '#fff' }}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={{ color: '#fff' }}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.paragraphText}>By logging in or registering, you have agreed to the Terms and Conditions and Privacy Policy.</Text>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcomeIcon: {
    // Add styles for the container of the welcome icon here
  },
  image: {
    width: 20,
    height: 20,
    bottom: 100,
    left: 260,
  },
  vector: {
    width: 20,
    height: 20,
    bottom: 170,
    left: 20,
  },
  foodBox: {
    width: 140.015,
    height: 155.179,
    flexShrink: 0,
    backgroundColor: '#0E7F3D',
    bottom: 190,
    left: 70,
  },
  success: {
    bottom: 390,
    left: 190,
  },
  vector2: {
    width: 20,
    height: 20,
    bottom: 320,
    right: 4,
  },
  text: {
    color: '#1F2937',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 27,
    bottom: -100,
  },
  secondaryText: {
    // Styles for the secondary text within the main text
    fontSize: 18,
    fontWeight: 'normal',
  },
  accountButton: {
    backgroundColor: '#0E7F3D',
    width: 300,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -150,
  },
  loginButton: {
    width: 256,
    paddingVertical: 16,
    paddingHorizontal: 64,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -200,
    backgroundColor: '#D1FAE5',
    borderRadius: 12,

  },
  paragraphText: {
    color: '#6B7280',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 14,
    bottom: -220,
    
  },
  welcomeIcon:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 320,
    justifyContent: 'center',
    alignItems: 'center',

  },
 
});

export default Home;
