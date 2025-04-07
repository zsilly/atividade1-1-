import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'LongShot': require('./assets/fonts/Long_Shot.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  const artworks = [
    {
      image: require('./assets/dali.jpg'),
      title: 'A Persistência da Memória',
      author: 'Salvador Dalí',
      year: 1931,
      material: 'Óleo sobre tela',
    },
    {
      image: require('./assets/dali2.jpg'),
      title: 'Paisagem Surrealista com Criança',
      author: 'Salvador Dalí',
      year: 1935,
      material: 'Óleo sobre tela',
    },
    {
      image: require('./assets/goya.jpg'),
      title: 'O Grande Bode',
      author: 'Francisco Goya',
      year: 1821,
      material: 'Óleo sobre tela',
    },
    {
      image: require('./assets/goya2.webp'),
      title: 'Aparição Fantasmagórica',
      author: 'Francisco Goya',
      year: 1823,
      material: 'Óleo sobre tela',
    },
    {
      image: require('./assets/goya3.jpg'),
      title: 'Homem Rindo',
      author: 'Francisco Goya',
      year: 1820,
      material: 'Óleo sobre tela',
    },
    {
      image: require('./assets/monet.jpg'),
      title: 'Pôr-do-sol em Veneza',
      author: 'Claude Monet',
      year: 1908,
      material: 'Óleo sobre tela',
    },
    {
      image: require('./assets/monet2.jpg'),
      title: 'Mulher com Sombrinha',
      author: 'Claude Monet',
      year: 1875,
      material: 'Óleo sobre tela',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {artworks.map((art, index) => (
        <View key={index} style={styles.card}>
          <Image source={art.image} style={styles.image} resizeMode="cover" />
          <View style={styles.info}>
            <Text style={styles.title}>{art.title}</Text>
            <Text style={styles.text}>Autor: {art.author}</Text>
            <Text style={styles.text}>Ano: {art.year}</Text>
            <Text style={styles.text}>Material: {art.material}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a1a1a',
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: 130,
    height: 130,
  },
  info: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'LongShot',
    marginBottom: 4,
  },
  text: {
    color: '#ccc',
    fontSize: 14,
    fontFamily: 'LongShot',
  },
});
