import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Home = () => {
  return (
    <View> 
        <View style={styles.topview}>
        <Image style={{height:"50%",width:"50%"}} source={require("../android/app/src/assets/kid.png")}/>

        </View>
     
    </View>
  );
}
const styles=StyleSheet.create({
topview:{
backgroundColor:"red",
height:"50%",
width:"50%"
}
})

export default Home;