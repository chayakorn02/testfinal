import React from 'react';
import { StyleSheet, ActivityIndicator, View, Text, Image, FlatList, TouchableWithoutFeedback, } from 'react-native';

class Card extends React.Component{
    constructor(){
        super();
        this.state = {
            isLoading: true,
            dataSource : []
        }
    }

    componentDidMount () {
        fetch( 'https://jsonplaceholder.typicode.com/photos' ).then((response) => response.json())
        .then((responseJson) => {
            this.setState ({
                isLoading: false,
                dataSource: responseJson
            })
        })
    }

    toTumnail = () => {
        this.props.navigation.navigate('TumnailScreen',)
    }

    _renderItem = ({item}) => (
        <TouchableWithoutFeedback onPress={this.toTumnail}>
            <View style={Styles.warp}>
                    <View style={Styles.line}>
                        <Image style={Styles.image} source={{ uri: item.url }}/>
                        <View style={Styles.item}>
                            <Text style={Styles.text}>{item.title}</Text>
                        </View>
                    </View>
            </View>
        </TouchableWithoutFeedback>
        );

        render(){

            if (this.state.isLoading){
                return (
                    <View >
                        <ActivityIndicator size="large" animating />
                    </View>
                )
            }else{
            return (
                <View >
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={this._renderItem}
                        keyExtractor = {(item, index) => index}
                    />
                </View>
            )
        }
    }
}

const Styles = StyleSheet.create({
    wrap: {
        flex:1,
        flexDirection: 'row',
    },
    line: {
        borderBottomWidth: 2,
        borderBottomColor: '#3333',
    },
    item: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    image:{
        margin: 10,
        width: 90,
        height: 90, 
        borderRadius: 400/ 2,

    },
    text :{
        fontSize: 15,
        fontWeight: '500',
        paddingLeft: 125,
        marginTop: 45,
        },
    
})


export default Card