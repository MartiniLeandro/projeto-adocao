import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import descriptions from '../descricao.json'; 

const AnimalDetailScreen = ({ route }) => {
  const { animal } = route.params; 

 
  const getAnimalText = (animal) => {
    return descriptions[animal.animal] || 'Informações não disponíveis.';
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Image source={animal.img} style={styles.image} />
        <Text style={styles.name}>{animal.nome}</Text>
        <Text style={styles.age}>Idade: {animal.age}</Text>
        <Text style={styles.description}>{getAnimalText(animal)}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Visualizar mais fotos</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, 
    backgroundColor: '#F8E6FF', 
    alignItems: 'center',
    justifyContent: 'flex-start', 
  },
  content: {
    width: width * 0.9, 
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, 
    marginTop: 10
  },
  image: {
    width: '99%', 
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  age: {
    fontSize: 18,
    color: '#666',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#F8BB01', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AnimalDetailScreen;
