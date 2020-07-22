import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import InDexScreen from '../Card/index'
import TumnailScreen from '../Card/tumnail'

const Appnavigation = createStackNavigator({
    InDexScreen,
    TumnailScreen
})




export default createAppContainer(Appnavigation)