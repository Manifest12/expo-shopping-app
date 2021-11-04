import React from 'react';
import { View, Text, TextInput, Button, TouchableHighlight } from 'react-native';

export default function homepage({navigation}) {
    return(
        <View style={{backgroundColor: '#ffffff'}}>
            <View style={{alignItems: 'center', justifyContent: 'center', }}>
                <Text style={{
                    fontSize: 30, fontWeight: 'bold', textShadowColor: '#888888',
                    textShadowOffset: {height: 10, width: 10}
                    }}> Manifest Stores </Text>
            </View>

            <View>
                <TextInput placeholder='Email/Username'
                style={{width: 150, height: 90}}/>
                <TextInput placeholder='Password' 
                style={{width:150, height: 90, marginBottom: 20}}/>
                <Button 
                onPress={() => navigation.navigate('home')}
                title='Login'
                />
            </View>

            <View>
                <Text> No account yet? </Text>
                <TouchableHighlight onPress={() => alert('In Progress')}>
                    <Text> Register Here </Text>
                </TouchableHighlight>
            </View>
        </View>
        
    );
}