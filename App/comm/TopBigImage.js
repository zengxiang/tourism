/**
 * Created by zengxiang on 16/9/8.
 */

'use strict'
import React , {Component} from 'react';
import {
    Text ,
    View ,
    Image
} from 'react-native';
import Button from 'react-native-button';
import {GetScreenWidth} from  './../comm/PublicAction'
export default class TopBigImage extends Component {

    constructor(props) {
        super(props);
    }

    bbb = ()=> {
        this.props.doTap('red');
    }


    render() {
        return (
            <Button onPress={this.bbb}>
                <Image style={styles.img} source={this.props.imgUrl}>
                    <Text style={styles.bigTitle}>{this.props.bigTitle}</Text>
                    <Text style={styles.subTitle}>{this.props.subTitle}</Text>
                </Image>
            </Button>
        );
    }
}

const styles = {
    img: {
        // flex:1,
        height: GetScreenWidth() / 698 * 340 ,
        // resizeMode: Image.resizeMode.cover ,
        width: GetScreenWidth() ,
        paddingHorizontal: 20 ,
        justifyContent: 'center' ,

    } ,
    bigTitle: {
        fontSize: 30 ,
        fontWeight: 'bold' ,
        color: 'white' ,
        backgroundColor: 'rgba(0,0,0,0)'
    } ,
    subTitle: {
        fontSize: 14 ,
        color: 'white' ,
        backgroundColor: 'rgba(0,0,0,0)' ,
        paddingTop: 10
    } ,
};
