import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const validEmail = 'usuario@palmsoft.com.br';
  const validPassword = 'senha';

  const handleLogin = () => {
    
    if (email === validEmail && password === validPassword) {
      
      const baseURL = 'https://run.mocky.io/v3/0bacaa1f-c94c-4163-b338-7c6d210ce97c'; 
      const url = `${baseURL}`;

      
      const data = {
        username: email, 
        password: password, 
      };

      axios.post(url, data)
        .then(() => {
          Alert.alert('Login realizado com sucesso!');
          navigation.navigate('Home'); 
        })
        .catch(error => {
          console.error('Erro ao fazer login:', error.response ? error.response.data : error.message);
          Alert.alert('Erro ao fazer login', error.response ? error.response.data.message : 'Verifique suas credenciais e tente novamente.');
        });
    } else {
      Alert.alert('Erro', 'Credenciais inválidas. Verifique seu e-mail e senha e tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
    
      <Image
        source={ require('../src/images/ico.png')} 
        style={styles.logo}
      />
      
      
      <Text style={styles.title}>LOGIN</Text>
      <Text style={styles.subtitle}>Insira seus dados para continuar</Text>
      
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>EMAIL</Text>
        <TextInput
          style={styles.input}
          placeholder="user@exemplo.com.br"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>SENHA</Text>
        <TextInput
          style={styles.input}
          placeholder="*****"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'flex-start', 
    backgroundColor: '#fff',
    paddingTop: 50, 
    paddingLeft: 20, 
    paddingRight: 20,
    marginTop: -50
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
    marginTop:20
  },
  label: {
    fontSize: 14,
    color: '#C13CF3', 
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderBottomWidth: 1,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#C13CF3', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
