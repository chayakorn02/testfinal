import React from 'react';
import { StyleSheet, ActivityIndicator, View, Text, Image, FlatList, TouchableOpacity } from 'react-native';



class Tumnail extends React.Component {


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

    _renderItem = ({item}) => (
        <View  Style={Styles.container}>
            <View Style={Styles.line}>
                <Image style={Styles.image} source={{ uri: item.thumbnailUrl }}/>
                <Text style={Styles.text}>{item.title}</Text>
            </View> 
        </View>
        );

        render(){

            if (this.state.isLoading){
                return (
                    <View>
                        <ActivityIndicator size="large" animating />
                    </View>
                )
            }else{
            return (
                <View>
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
    
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    image: {
        alignSelf: 'center',
        height : 150,
        width : 150
    },
    text : {
        alignSelf: 'center',
        padding : 20,
        fontSize : 15
    }

})


export default Tumnail