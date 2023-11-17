import React from 'react';
import { View, Text, TouchableOpacity ,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigationProp } from '@react-navigation/stack'; 


const Music = ({ route }: any) => {
  const { songTitle, artist, artwork } = route.params;

  const navigation = useNavigation<StackNavigationProp<any, any>>();

  const handleBackPress = () => {
    navigation.navigate('Explore');
  };

  return (
    <View>
      <TouchableOpacity onPress={handleBackPress}>
        <Icon name="arrow-left" size={30} color="black" />
      </TouchableOpacity>
      <Text>Song Title: {songTitle}</Text>
      <Text>Artist: {artist}</Text>
      <Image source={{ uri: artwork }} style={{ width: 50, height: 50 }} />
      
    </View>
  );
};

export default Music;