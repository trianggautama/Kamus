import React, { Component } from 'react';
import {View,Text,StatusBar,FlatList,TouchableOpacity,TextInput} from 'react-native';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            'data' :[
                {
                    judul     :'apel',
                    deskripsi : 'apel adalah buah'
                },
                {
                    judul     :'jeruk',
                    deskripsi : 'jeruk adalah buah'
                },
                {
                    judul     :'pear',
                    deskripsi : 'pear adalah buah'
                },
                {
                    judul     :'Mangga',
                    deskripsi : 'Mangga adalah buah'
                },
                {
                    judul     :'Anggur',
                    deskripsi : 'Anggur adalah buah'
                },
                {
                    judul     :'Sirsak',
                    deskripsi : 'Sirsak adalah buah'
                },
                {
                    judul     :'Nangka',
                    deskripsi : 'Nangka adalah buah'
                },
                {
                    judul     :'Strawberry',
                    deskripsi : 'Strawberry adalah buah'
                },
                {
                    judul     :'Durian',
                    deskripsi : 'Durian adalah buah'
                },
                {
                    judul     :'Nanas',
                    deskripsi : 'Nanas adalah buah'
                },
                {
                    judul     :'Semangka',
                    deskripsi : 'Semangka adalah buah'
                },
                {
                    judul     :'Manggis',
                    deskripsi : 'Manggis adalah buah'
                },
            ],
            'pencarian' : '',
         };
    }
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#212121'}}>
                <StatusBar backgroundColor="#1976d2"/>
                <View style={{backgroundColor:'#2196f3',paddingVertical:15,elevation:3}}>
                    <Text
                        style={{color:'#ffffff',textAlign:'center',alignItems:'center',fontWeight:'bold',fontSize:18}}
                    >Home</Text>
                </View>
                <TextInput 
                    value={this.state.pencarian}
                    onChangeText={({text}) => this.setState({pencarian:text})}
                    style={{backgroundColor:'#ffffff',marginHorizontal:20,marginTop:20,marginBottom:10,borderRadius:5}}
                />
                <FlatList
                data={this.state.data}
                renderItem={({item,index})=>(
                    <TouchableOpacity style={{marginHorizontal:20,marginVertical:10,backgroundColor:'#2196f3',padding:8,borderRadius:5,elevation:3}}
                    onPress={() => this.props.navigation.navigate('Detail',{
                        'judul'     : item.judul,
                        'deskripsi' : item.deskripsi
                    })}
                    >
                        <Text style={{color:'#ffffff'}}>
                            {item.judul}
                        </Text>
                        <Text style={{color:'#ffffff'}}>
                            {item.deskripsi}
                        </Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.judul.toString()}
                />
            </View>
        );
    }
}

export default Home;