import * as React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import TitleScreen from '../screens/title'
import TumnailScreen from '../screens/tumnail'



const Title = createStackNavigator({
  TitleScreen
})
const Tumnail = createStackNavigator({
    TumnailScreen
})
  

export default createAppContainer(Title)