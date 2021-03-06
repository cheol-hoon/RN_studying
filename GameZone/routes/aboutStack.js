import { createStackNavigator } from 'react-navigation-stack';
//import { createAppContainer } from 'react-navigation';
import About from '../screens/about';
import Header from '../shared/header';
import React from 'react';

const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='About Game Zone'/>
            }
        }
            // title: 'About GameZone',
            //headerStyle: { backgroundColor: '#333'}
    }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height:80 }
    }
});

export default AboutStack;