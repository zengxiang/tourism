/**
 * Created by zengxiang on 16/9/12.
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

export default class Find extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    doTap=(a)=>{
        alert(a);
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{height: 64}}></View>
                <TopBigImage imgUrl={require('./../img/tu3.png')} bigTitle="风景欣赏"
                             subTitle="旅游景点的图片集合等" doTap={this.doTap} ></TopBigImage>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1 ,
    }
};
