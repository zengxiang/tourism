/**
 * Created by zengxiang on 16/9/5.
 */
'use strict';
import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
} from 'react-native';

import Button from 'react-native-button';
import {GetScreenWidth, GetListData} from './../PublicAction'
import {Actions} from 'react-native-router-flux';


import List from 'react-native-listview-refresher';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    _handlePress() {
        Actions.HomeDetail();
    }

    render() {
        return (
            <View>
                <View style={styles.navBg}>
                    <View style={{height: 20}}>
                    </View>
                    <View style={styles.nav}>
                        <Image style={styles.logo} source={require('./../img/logo.png')}/>
                        <Image style={styles.searchBg} source={require('./../img/search_bg.png')}>
                            <TextInput
                                style={styles.searchInput}
                                onChangeText={(text) => this.setState({text})}
                                value={this.state.text}
                            />
                        </Image>
                    </View>
                </View>
                <List style={{height: 300}}
                      ref='listView'
                      renderRow={this.renderRow}
                      onFetching={this.fetch}
                      pullDownRefreshable={true}
                      pullUpRefreshable={true}
                />
                {/*<Button onPress={Actions.tab2}>跳到消息页面</Button>*/}
                {/*<Button onPress={Actions.HomeDetail}>push Detail</Button>*/}
                {/*<Button*/}
                {/*style={{fontSize: 20, color: 'green'}}*/}
                {/*styleDisabled={{color: 'red'}}*/}
                {/*onPress={this._handlePress}>*/}
                {/*push Detail(方法里跳转)*/}
                {/*</Button>*/}
                {/*<Button onPress={Actions.HomeDetail1}>隐藏nav</Button>*/}
                {/*<Button onPress={Actions.HomeDetail2}>隐藏tab</Button>*/}

            </View>
        )
    }

    fetch = (page = 1, callback, options)=> {

        setTimeout(() => {
            callback(GetListData().data, {allLoaded: false});
        }, 1000);
    }

    renderRow = (data, sectionID, rowID) => {
        return <View key={rowID} style={{height: 100, width: 300}}>
                <Text key={rowID}>index key={rowID} =={data.createTime} ={sectionID}== {rowID}</Text>
            </View>
    }
}

class Cell extends Component {
    render() {
        return (
            <View style={{height: 100, width: 300}}>
                <Text>index {this.props.key} =={this.props.data.createTime} === {this.props.rowID}</Text>
            </View>
        )
    }
}
const styles = {
    navBg: {
        height: 64,
        backgroundColor: '#333333',
    },
    nav: {
        height: 44,
        flexDirection: 'row',
        alignItems: 'center'
    },
    logo: {
        height: 44,
        resizeMode: Image.resizeMode.contain,
    },
    searchBg: {
        width: GetScreenWidth() - 44 - 70,
        height: 30,
        resizeMode: Image.resizeMode.contain,

    },
    searchInput: {
        borderColor: 'white',
        height: 30,
        paddingHorizontal: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
};
