import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const LoginRegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Username, setUsername] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = () => {
    if (email === '' || password === '') {
      alert('Please enter your email and password');
      return;
    }

   
    setIsLogin(false);
  };

  const handleRegister = () => {
    if (email === '' || password === '') {
      alert('Please enter your email and password');
      return;
    }

  
    setIsLogin(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login or Register</Text>
      {isLogin ? (
        <View style={styles.loginContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.registerContainer}>
        <TextInput
            style={styles.input}
            placeholder="Username"
            value={Username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    width: 300,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: "red",
    color: "white",
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'center',
    paddingBottom: '2cm',
  },
});

export default LoginRegisterPage;