import React from 'react';
import { View, Text, TextInput, TouchableHighlight, ViewPropTypes } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

export default function homepage({navigation}) {
    return(

        <View style={{flex: 1}}>
            <View style={{flex: 0.1, flexDirection: 'row', justifyContent: 'space-between',
            borderWidth: 0.6, borderRadius: 8}}>
                <View>
                    <TextInput placeholder='Search for your product here' 
                    style={{borderWidth: 0.3, fontSize: 12, width: 150, borderRadius: 6, padding: 3,
                    marginTop: 10, marginLeft: 5, backgroundColor: '#d6d4ce'}}/>
                </View>

                <View style={{borderRadius: 6,
                    marginTop: 10, marginRight: 5, marginBottom: 20, padding: 6}}>
                    <TouchableHighlight onPress={() => navigation.navigate('cart')} underlayColor='#d6d4ce'>
                        <AntDesign name='shoppingcart' size={20} color='grey' backgroundColor='#d6d4ce'/>
                    </TouchableHighlight>
                </View>
            </View>

            <View style={{flex: 0.4, borderWidth: 0.6, borderRadius: 8, padding: 5, 
                marginTop: 15}}>
                    <Text> The second view </Text>
            </View>

            <View style={{flex: 0.4, borderWidth: 0.6, borderRadius: 8, marginTop: 15}}>
                <Text> The third view... </Text>
            </View>
        </View>

    );
}