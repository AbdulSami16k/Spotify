import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Songs from './Song.json';
import { StackNavigationProp } from '@react-navigation/stack'; 
import LinearGradient from 'react-native-linear-gradient';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
const Explore = () => {

    type Song = {
        id: string;
        title: string;
        artist: string;
        artwork: string;
        // Add other properties if needed
      };

      const navigation = useNavigation<StackNavigationProp<any, any>>();

    const handleImagePress = (item:any) => {
      // Navigate to the Music component, passing the selected item data
      navigation.navigate('Music', { item });
    };
  return (
    <GestureHandlerRootView>     
    <LinearGradient  colors={['darkgreen','black']}style={{height:'100%'}}>   
    <View style={styles.container}>
      <Text style={styles.header}>Explore</Text>
      <FlatList
        data={Songs}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (

          <TouchableOpacity onPress={() => handleImagePress(item)}>
            <View style={styles.itemContainer}>
              <Image source={{ uri: item.artwork }} style={styles.artwork} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.artist}>{item.artist}</Text>
              </View>
              
            </View>
            </TouchableOpacity>
        )}
      />
    </View>
    </LinearGradient> 
        </GestureHandlerRootView> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color:"white",
    //textAlign:"center"
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  //  backgroundColor:"red",
   width:"50%",
  },
  artwork: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 16,
  },
  textContainer: {
 // backgroundColor:"blue",
  flexDirection:"column"
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  color:"white"
  },
  artist: {
    fontSize: 16,
    color: 'gray',
  },
});

export default Explore;
