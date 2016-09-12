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
    get onTap() {
        return this._onTap;
    }

    set onTap(value) {
        this._onTap = value;
    }

    constructor(props) {
        super(props);
        this.state = {'bgColor':"white"};
    }
    _callBackAction =(a) =>{
         alert(a);
        this.setState({'bgColor':a});
    }
    _onTap = (a)=> {
        Actions.TravelAdvisoryDetail({
            'obj':1,
            'name':'222',
            'action':this._callBackAction
        });
    }
    render() {
        return (
            <View style={[styles.container,{backgroundColor:this.state.bgColor}]}>
                <View style={{height: 64}}></View>
                <TopBigImage imgUrl={require('./../img/tu4.png')} bigTitle="旅游咨询"
                             subTitle="介绍各种最新的旅行信息，景点攻略" doTap={this._onTap}></TopBigImage>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1
    }
};
