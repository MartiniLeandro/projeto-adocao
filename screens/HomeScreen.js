import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Modal, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const data = [
  {
    id: '1',
    animal: 'Cachorro 01',
    nome: 'Pumpkin',
    age: '3 Anos',
    category: 'Cachorro',
    img: require('../src/images/cachorro.jpg'),
  },
  {
    id: '2',
    animal: 'Gato 01',
    nome: 'Frumpkin',
    age: '11 Anos',
    category: 'Gato',
    img: require('../src/images/gato.jpg'),
  },
  {
    id: '3',
    animal: 'Coelho 01',
    nome: 'Floquinho',
    age: '7 Anos',
    category: 'Coelho',
    img: require('../src/images/coelho.jpg'),
  },
  {
    id: '4',
    animal: 'Peixe 01',
    nome: 'Sharkinho',
    age: '11 Meses',
    category: 'Peixe',
    img: require('../src/images/peixe.jpg'),
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = (animal) => {
    navigation.navigate('AnimalDetail', { animal });
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setModalVisible(false);
  };

  const filteredData = selectedCategory === 'Todos' 
    ? data 
    : data.filter(animal => animal.category === selectedCategory);

  return (
    <View style={styles.container}>
      
      <Text style={styles.headerTitle}>HOME</Text>
      <Text style={styles.subtitle}>Escolha uma categoria para visualizar</Text>

      
      <TouchableOpacity style={styles.categoryButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.categoryButtonText}>{selectedCategory}</Text>
      </TouchableOpacity>

      
      <Text style={styles.resultsTitle}>Resultados da busca:</Text>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)} style={styles.resultItem}>
            <Image source={item.img} style={styles.resultImage} />
            <View style={styles.resultTextContainer}>
              <Text style={styles.resultName}>{item.animal}</Text>
              <Text style={styles.resultOwner}>{item.nome}</Text>
              <Text style={styles.resultAge}>{item.age}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

     
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Escolha uma Categoria</Text>
          {['Todos', 'Cachorro', 'Gato', 'Coelho', 'Peixe'].map((category) => (
            <Pressable key={category} onPress={() => handleCategorySelect(category)} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>{category}</Text>
            </Pressable>
          ))}
          <Pressable onPress={() => setModalVisible(false)} style={styles.modalCloseButton}>
            <Text style={styles.modalCloseButtonText}>Fechar</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginTop:50
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  categoryButton: {
    backgroundColor: '#F8BB01', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  categoryButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  resultsTitle: {
    fontSize: 18,
    color: '#C13CF3', 
    marginBottom: 10,
  },
  resultItem: {
    flexDirection: 'row',
    backgroundColor: '#F8E6FF', 
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  resultImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  resultTextContainer: {
    justifyContent: 'center',
  },
  resultName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  resultOwner: {
    fontSize: 14,
    color: '#666',
  },
  resultAge: {
    fontSize: 14,
    color: '#666',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  modalButton: {
    backgroundColor: '#F8BB01',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 10,
  },
  modalButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  modalCloseButton: {
    backgroundColor: '#C13CF3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  modalCloseButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
