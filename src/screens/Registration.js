import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../actions/authActions';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const Register = () => {

  const [name, setName] = useState('');
  const [namerr, setNamerr] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reenterPassword, setReenterPassword] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [reenterPasswordError, setReenterPasswordError] = useState(null);
  const [userExistsMessage, setUserExistsMessage] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // const navigation = useNavigation();

  const handleRegister = async () => {
    // Reset previous validation errors and user exists message
    setNamerr(null);
    setEmailError(null);
    setPasswordError(null);
    setReenterPasswordError(null);
    setUserExistsMessage('');

    // Validate all fields
    if (!name || !email || !password || !reenterPassword) {
      if (!name) setNamerr('Name is required');
      if (!email) setEmailError('Email is required');
      if (!password) setPasswordError('Password is required');
      if (!reenterPassword) setReenterPasswordError('Re-enter password is required');
      return;
    }

    // Password strength validation
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.*\s).{7,}$/;
    if (!password.match(passwordRegex)) {
      setPasswordError('Password must contain at least 7 characters, 1 number, 1 uppercase letter, 1 lowercase letter, and 1 special character');
      return;
    }

    if (password !== reenterPassword) {
      setReenterPasswordError('Passwords do not match');
      return;
    }

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: name,
        
      });

      dispatch(registerUser(user));


      // Reset fields and show success message
      setName('');
      setEmail('');
      setPassword('');
      setReenterPassword('');
      setUserExistsMessage('Account created successfully.');

      // navigation.navigate('Login');
    } catch (error) {
      console.error('Registration error:', error);
      if (error.code === 'auth/email-already-in-use') {
        setUserExistsMessage('User with this email already exists.');
      }
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        
        <View style={styles.welcomeIcon}>
          <Image
            source={require('../../assets/best.png')}
            
          />
         
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.formText}>Create Account</Text>
          <Text style={styles.loginText}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={(text) => setName(text)}
          />
          {namerr && <Text style={styles.errorText}>{namerr}</Text>}
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
            secureTextEntry
          />
          {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}
          <TextInput
            style={styles.input}
            placeholder="Reenter Password"
            onChangeText={(text) => setReenterPassword(text)}
            secureTextEntry
          />
           {reenterPasswordError && <Text style={styles.errorText}>{reenterPasswordError}</Text>}

{userExistsMessage && <Text style={styles.successMessage}>{userExistsMessage}</Text>}

<View style={styles.passwordStrength}>
  {passwordStrength && <Text>Password Strength: {passwordStrength}</Text>}
</View>
          <TouchableOpacity style={styles.button}  onPress={handleRegister}> 
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          {auth.error && <Text style={styles.error}>{auth.error}</Text>}
          <TouchableOpacity style={styles.googlebutton} >
            <Image
              source={require('../../assets/google.png')}
              style={styles.googleImage}
            />
            <Text style={styles.googleText}>Sign up with google</Text>
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
    color: '#32B768',
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
    color: '#89909E',
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

export default Register;
