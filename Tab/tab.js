// import React from 'react';
// import {StyleSheet, View, Text, TouchableOpacity } from 'react-native';
// import Colors from '../../constants/Colors'

// class Tab extends React.Component{
//     render () {
//         return (
//             <TouchableOpacity onPress={this.props.onPress} style={styles.touchable}>
//                 <View style={[styles.tab, this.props.selected ? styles.selected : false]}>
//                     <Text style={[styles, this.props.selected ? styles.selected : false]}>
//                         {this.props.children}
//                     </Text>
//                 </View>
//             </TouchableOpacity>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     touchable:{
//         flex:1
//     },
//     tab: {
//       height: 35,
//       alignItems: 'center',
//       justifyContent: 'center',
//       color: Colors.accent,
//       borderLeftColor: Colors.accent,
//       borderRightColor: Colors.accent,
//       borderRightWidth: 1,
//       borderLeftWidth: 1,
//       flex: 1,
//     },
//     selected: {
//         backgroundColor: Colors.accent,
//         color: '#ffffff'
//     }
      
// })

// export default Tab;