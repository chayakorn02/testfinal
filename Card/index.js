import React from 'react';
import {StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { withNavigation } from 'react-navigation';
import Colors from '../../constants/Colors'
import 'react-native-gesture-handler';
import mock from '../mock/index'


class Card extends React.Component{
    toEvent = () => {
        this.props.navigation.navigate('EventScreen', {data: this.props.data})
    }
    render () {
        const { data } = this.props;

        return (
            <TouchableWithoutFeedback onPress={this.toEvent}>
            <View style={styles.wrap}>
                    <Image style={styles.image} source={{ uri: data.image }} />
                    <View style={styles.right}>
                        <Text style={styles.title}>{data.title}</Text>
                        <Text style={styles.speaker}>{data.speaker}</Text>
                        <Text style={styles.date}>{data.date} / {data.time}</Text>
                    </View>
            </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    wrap: {
        height:200,
        alignSelf: 'stretch',
        padding: 10,
        borderBottomColor: Colors.accent,
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems : 'center'
        
    },
    image:{
        height: 180,
        width: 180,
        marginRight: 10
    },
    right: {
        flex:1
    },
    title: {
        fontSize: 18,
        fontWeight: '700'
    },
    speaker: {
        marginTop: 4,
        flex: 1

    },
    date: {
        color: Colors.accent
    }
      
})

export default withNavigation(Card);