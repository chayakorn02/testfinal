import * as React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Card from '../commponents/Card/index'
import mock from '../mock/index'
import Tab from '../commponents/Tab/index'
import 'react-native-gesture-handler';


class title extends React.Component { 
  
  }
  render () {
 
    return (
     <ScrollView style={styles.container}>
        <Text style={styles.title}>{data.title}</Text>
      </ScrollView> 
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    alignSelf: 'stretch'
  }

    
})

export default title;