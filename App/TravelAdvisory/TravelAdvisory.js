/**
 * Created by zengxiang on 16/9/8.
 */

'use strict'
import React , {Component} from 'react';
import {
    Text ,
    View
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';

import TopBigImage from  './../comm/TopBigImage'

export default class TravelAdvisory extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{height: 64}}></View>
                <TopBigImage imgUrl={require('./../img/tu4.png')} bigTitle="旅游咨询"
                             subTitle="介绍各种最新的旅行信息，景点攻略"></TopBigImage>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1 ,
    } ,

};
