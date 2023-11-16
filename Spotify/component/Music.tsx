import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigationProp } from '@react-navigation/stack'; 

const Music = () => {
    const navigation = useNavigation<StackNavigationProp<any, any>>();


  const handleBackPress = () => {
    navigation.navigate('Explore');
  };

  return (
    <View>
      <TouchableOpacity onPress={handleBackPress}>
        <Icon name="arrow-left" size={30} color="black" />
      </TouchableOpacity>
      <Text>I am Music</Text>
    </View>
  );
};

export default Music;
