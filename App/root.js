'use strict';
import React, {Component} from 'react';
import {AppRegistry, Navigator} from 'react-native';

// import Splash from './src/splash';
import Default from './Tabbar/Default';

class tourism extends Component {
    render() {
        let defaultName = "Default";
        let defaultComponent = Default;
        return (
            <Navigator initialRoute={{name: defaultName, component: defaultComponent}}
                       renderScene={(route, navigator) => {
                           let Component = route.component;
                           return <Component {...route.params} navigator={navigator}/>
                       }}
            />
        )
    }
}

AppRegistry.registerComponent('tourism', ()=>tourism);

