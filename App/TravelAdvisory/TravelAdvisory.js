/**
 * Created by zengxiang on 16/9/8.
 */

'use strict'
import React , {Component} from 'react';
import {
    Text ,
    View,
    Image,
    TouchableHighlight
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';

import TopBigImage from  './../comm/TopBigImage'

import  {GetScreenWidth} from './../comm/PublicAction'

export default class TravelAdvisory extends Component {
    constructor(props) {
        super(props);
        this.state = {'bgColor': "#f2f2f2"};
    }

    _callBackAction = (a) => {
        alert(a);
        this.setState({'bgColor': a});
    }
    _onTap = (a)=> {
        Actions.TravelAdvisoryDetail({
            'obj': 1 ,
            'name': '点击头部' ,
            'action': this._callBackAction
        });
    }

    render() {
        return (
            <View style={{backgroundColor: this.state.bgColor}}>
                <View style={{height: 64}}></View>
                <TopBigImage imgUrl={require('./../img/tu4.png')}
                             bigTitle="旅游咨询"
                             subTitle="介绍各种最新的旅行信息，景点攻略"
                             doTap={this._onTap}>
                </TopBigImage>
                <Cell cellBgColor ={this.state.bgColor}></Cell>
            </View>
        );
    }
}

class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {'cellBgColor': this.cellBgColor};
    }

    _TouchableHighlightTap = ()=> {
        Actions.TravelAdvisoryDetail({
            'obj': 2 ,
            'name': '点击cell' ,
            'action': this._callBackAction
        });    }

    _buttonTap() {
        alert('buttonTap');
    }

    _callBackAction = (a) => {
        alert(a);
        this.setState({'cellBgColor': a});
    }

    render() {
        return <View style={[cellStyles.cellBg,{backgroundColor:this.state.cellBgColor}]}>
            <Button onPress={this._TouchableHighlightTap}>
                <View style={cellStyles.cellBg1}>
                    <Image style={cellStyles.img} source={require('./../img/tu2.png')}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={[cellStyles.WhiteFont , {backgroundColor: "green"}]}>国内旅游</Text>
                        </View>
                        <View style={cellStyles.bottomView}>
                            <Text style={cellStyles.WhiteFont}>国内旅游1111</Text>
                            <Button onPress={this._buttonTap} style={[cellStyles.WhiteFont , {backgroundColor: "#ff9900"}]}>国内旅游</Button>
                        </View>

                    </Image>
                </View>
            </Button>
        </View>
    }
}


const cellStyles = {
    cellBg: {
        height: 200 ,
        paddingBottom: 8 ,
    } ,
    cellBg1: {
        backgroundColor: 'white' ,
        flex: 1 ,
        padding: 10 ,
        borderBottomColor: '#dddddd' ,
        borderBottomWidth: 1
    } ,
    //子试图上下对齐
    img: {
        height: 172 ,
        width: GetScreenWidth() - 20 ,
        resizeMode: Image.resizeMode.stretch ,
        flexDirection: "column" ,
        justifyContent: "space-between"
    } ,
    WhiteFont: {
        padding: 10 ,
        color: 'white' ,
        fontSize: 14 ,
    } ,
    //子试图左右对齐
    bottomView: {
        backgroundColor: 'rgba(0,0,0,0.4)' ,
        flexDirection: 'row' ,
        justifyContent: 'space-between' ,
        alignItems: "center"
    } ,
}
