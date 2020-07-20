import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import mock from '../mock/index'
import Colors from '../constants/Colors'


const tumnail = () => { 

  return (
    <View style={styles.container}>
      <Image style={styles.tumnail} source={{ uri: data.tumnail }} />
      <Text style={styles.url}>{data.url}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  url: {
    fontSize : 18
  },
  tumnail: {
    height: 40,
    width: 40,
    borderRadius: 400/ 2
  },
  
  
 
})

export default tumnail;