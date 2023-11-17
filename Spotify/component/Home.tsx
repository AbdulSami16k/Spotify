import React ,{useEffect}from 'react';
import { View, Text, StyleSheet, Image, Button,} from 'react-native';
import { TouchableOpacity,FlatList,GestureHandlerRootView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Songs from "./Song.json";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';
const Home = () => {

    // const abc = (num: number) => {
    //     let res = num * 100;
    //     res = res / 932;
    //     console.warn('percentage : ', res);
    //   };
    // useEffect(() => {
    //  abc(35)
    // }, []);
const buttons:any[]=[

    {
        id:"1",
        btn1:"Romance"
    },
    {
        id:"1",
        btn1:"Party"
    },
    {
        id:"1",
        btn1:"Podcast"
    },
    {
        id:"1",
        btn1:"Feel Good"
    },{
        id:"1",
        btn1:"Cool"
    }
];
type Songs={
    id: string;
    title: string;
    artist: string;
    artwork: string;
}



const renderButtons = ({ item }: { item: { id: string; btn1: string } }) => (
<View style={{}}>
<TouchableOpacity style={styles.topbtns}>
   <Text style={styles.txtofbtns}>{item.btn1}</Text>
    </TouchableOpacity>
</View>
);

  return (  
    <GestureHandlerRootView>     
<LinearGradient  colors={['darkgreen','black']}style={{height:'100%'}}>   
        <View style={styles.topview}>
            <Text style={{fontWeight:"bold",fontSize:24,color:"white",marginLeft:"5%"}}>
            Good{"\n"} 
morning moods✨
            </Text>
            <View style={styles.viewforimg}>
<Image style={{height:"100%",width:"90%"}} source={require("../android/app/src/assets/kid.png")}/>
            </View>
        </View>
    <View style={styles.flatlistview}>
    
    <FlatList
      data={buttons}
      renderItem={renderButtons}
      keyExtractor={(item) => item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />

        </View>
        <View style={styles.quickview}>
        
<Text style={{color:"white",fontWeight:"bold",fontSize:22,marginLeft:"4%"}}
>
    Quick Play
</Text>
        </View>
        <View style={styles.songslistview}>
        <FlatList
        data={Songs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image source={{ uri: item.artwork }} style={styles.artwork} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.artist}>{item.artist}</Text>
              </View>
            </View>
        )}
      />
        </View>
        <View style={styles.viewteacup}>
            <Image style={styles.teaimg} source={require("../android/app/src/assets/teacup.png")}/>

        </View>



        </LinearGradient> 
        </GestureHandlerRootView> 
  );
}
const styles=StyleSheet.create({
topview:{
    marginTop:"10%",
    flexDirection:"row",
//backgroundColor:"red",
height:"10%",
width:"100%"
},
viewforimg:{
    alignItems:"center",
   // marginTop:"5%",
    height:"100%",
    width:"20%",
 // backgroundColor:"blue",
    marginLeft:"20%",
    borderRadius:0
},
flatlistview:{
marginTop:"3%",
   width:"100%",
   // backgroundColor:"blue",
    height:"10%"
},
topbtns:{
 backgroundColor: '#2f4f4f',
width:hp(10.65),
height:hp(5.75),
alignItems:"center",
marginLeft:10,
borderRadius:12,
justifyContent:"center"
},
txtofbtns:{
    textAlignVertical:"center",
    color:"white",
    fontWeight:"300",
    fontSize:14
},
quickview:{
    //backgroundColor:"red",
    width:"100%",
    height:"5%"
},
songslistview:{
marginTop:"5%",
 width:"100%",
 marginLeft:"4%",
 height:"35%"

},

itemContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  artwork: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
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
  viewteacup:{
 //backgroundColor:"red",
  width:"40%",
  height:"27%",
  marginLeft:"4%",
  borderRadius:20,
  marginTop:"5%",
alignItems:"center"
  },
  teaimg:{
height:"100%",

  }

})

export default Home;