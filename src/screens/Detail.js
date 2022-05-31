import React, { Component } from 'react';
import {View,Text,StatusBar,TouchableOpacity} from 'react-native';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           
         };
    }
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#212121'}}>
                <StatusBar backgroundColor="#1976d2"/>
                <View style={{backgroundColor:'#2196f3',paddingVertical:15,elevation:3}}>
                    <Text
                        style={{color:'#ffffff',textAlign:'center',alignItems:'center',fontWeight:'bold',fontSize:18}}
                    >Detail</Text>
                </View>
              
            </View>
        );
    }
}

export default Detail;