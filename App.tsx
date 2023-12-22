import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {

  const [bgcolor, setBgcolor] = useState('#ffffff')
  const bgManager = ()=>{
    let color = '#'
    let colorvalues = '0123456789ABCDEF'
    for(let i=0; i<6; i++)
    {
      color += colorvalues[Math.floor(Math.random() * 16)]
    }
   
    setBgcolor(color)

  }
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center", backgroundColor:bgcolor}}>
      <TouchableOpacity style={{ backgroundColor:"black", padding:20, borderRadius:10}} onPress={bgManager}>
       <Text style={{color:"white"}}>Change me</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

