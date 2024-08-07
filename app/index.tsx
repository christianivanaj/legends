import React from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import styles from './src/styles/styles';

const sourcebooks = [
  { id: '1', title: 'Player\'s Handbook', description: 'Essential reference for players.' },
  { id: '2', title: 'Dungeon Master\'s Guide', description: 'Essential reference for DM.' },
  { id: '3', title: 'Monster Manual', description: 'Over 400 creatures to use in your adventures.' },
  { id: '4', title: 'Xanathar\'s Guide to Everything', description: 'More rules, options, and lore.' },
  { id: '5', title: 'Tasha\'s Cauldron of Everything', description: 'Expanded rules and options.' },
  { id: '6', title: 'Volo\'s Guide to Monsters', description: 'Lore and rules for monsters.' }
];

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Navbar />
      <Text style={styles.header}>Welcome to the D&D Sourcebooks Library</Text>
      <FlatList
        data={sourcebooks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.bookItem}>
            <Text style={styles.bookTitle}>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}

const Navbar = () => {
  return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.navbar}>
      <Image source={{ uri: 'https://via.placeholder.com/40' }} style={styles.logo} />
      <TextInput style={styles.searchBar} placeholder="Search..." placeholderTextColor="#ccc" />
      <View style={styles.iconContainer}>
        <FontAwesome name="facebook" size={24} color="white" style={styles.icon} />
        <FontAwesome name="twitter" size={24} color="white" style={styles.icon} />
        <FontAwesome name="instagram" size={24} color="white" style={styles.icon} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
