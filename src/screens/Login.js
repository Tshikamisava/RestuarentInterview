import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../actions/authActions';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogin = async () => {
    setEmailError(null);
    setPasswordError(null);
    setLoginError(null);

    if (!email || !password) {
      if (!email) setEmailError('Email is required');
      if (!password) setPasswordError('Password is required');
      return;
    }

    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;

      if (user) {
        dispatch(loginSuccess(user));
        navigation.navigate('MainHome');
      } else {
        setLoginError('User does not exist.');
      }
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        setLoginError('User does not exist.');
      } else if (error.code === 'auth/wrong-password') {
        setLoginError('Incorrect password.');
      } else {
        setLoginError('Please enter a valid email and password');
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <View style={styles.welcomeIcon}>
          <Image source={require('../../assets/best.png')} />
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.formText}>Create Account</Text>
          <Text style={styles.loginText}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text)}
          />
          {emailError && <Text style={styles.errorText}>{emailError}</Text>}
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={!showPassword}
          />
          {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}
          <TouchableOpacity style={styles.showPasswordButton} onPress={() => setShowPassword(!showPassword)}>
            <Text>{showPassword ? 'Hide Password' : 'Show Password'}</Text>
          </TouchableOpacity>
          {loginError && <Text style={styles.errorText}>{loginError}</Text>}
          <TouchableOpacity style={styles.forgotBtn} onPress={() => navigation.navigate('ForgotPasswordScreen')}>
            <Text style={styles.forgotTxt}>Forgot Password</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.googlebutton}>
            <Image source={require('../../assets/google.png')} style={styles.googleImage} />
            <Text style={styles.googleText}>Login with Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000007A',
    width: '100%',
    height: '100%',
  },
  container: {
    position: 'relative',
    width: 375,
    height: 812,
  },

  formContainer: {
    width: 375,
    height: 576,
    flexShrink: 0,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: '#FFF',
    position: 'absolute',
    bottom: 0,
  },
  formText: {
    color: '#89909E',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 20,
    right: 70,
    marginTop: 40, 
  },
  input: {
    width: 327,
    height: 48,
    flexShrink: 0,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#BEC5D1',
    margin: 10,
    
  },
  button: {
    width: 256,
    paddingVertical: 16,
    paddingHorizontal: 64,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', // Assuming you want a row layout
    marginVertical: 10,
    borderRadius: 12,
    backgroundColor: '#32B768',
    left: 40,
  },
    googleImage: {
        width: 20,
        height: 20,
        flexShrink: 0,
         right: 10,
         top: 1,
    },
    googlebutton: {
        width: 256,
        height: 50,
        flexDirection: 'row',  // Make it a row layout
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 24,
        borderRadius: 12,
        backgroundColor: '#F4F4F4',
        left: 40,
    },
    googleText: {
        color: '#000000',
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 20,
        marginLeft: 10,  // Add marginLeft to create space between the image and text
        bottom: 1,
    },
    
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 20,
    
  },
  loginText: {
    color: '#32B768',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 20,
    left: 70,
    bottom: 20,
  },
  welcomeIcon: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 320,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 20,
    height: 20,
    bottom: 100,
    left: 260,
  },
  
 
  accountButton: {
    backgroundColor: '#0E7F3D',
    width: 300,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 100,
  },
  background: {
    width: 264.898,
    height: 211.1,
    flexShrink: 0,
    top: 200,
    marginLeft: 40

  },
  

});

export default Login;
