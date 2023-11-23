import { View, Text,Image,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import Video from 'react-native-video';

const Infoscreen=()=> {

  return (
    <View style={{backgroundColor:"#fff",flex: 1 }}>
      <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center',margin:150 }}>
      <Video style={{height:300,width:300}}
         source={require('../assets/BOYCOTT.mp4')}
        
        controls={false}
        resizeMode="contain"
      />
      </View>
      <View>
        <Text>Hello</Text>
      </View>
      <View>
         <TouchableOpacity></TouchableOpacity>
      </View>
    </View>
    
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   video: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
// });
export default Infoscreen;