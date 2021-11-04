import React from 'react';
import { View, Text, TextInput, Button, TouchableHighlight } from 'react-native';

export default function homepage({navigation}) {
    return(
        <View style={{flex: 1, backgroundColor: '#ffffff', justifyContent: 'center'}}>
            
            <View style={{alignItems: 'center', justifyContent: 'center', marginBottom: 15 }}>
                <Text style={{
                    fontSize: 30, fontWeight: 'bold', textShadowColor: '#888888',
                    textShadowOffset: {height: 10, width: 10}
                    }}> Manifest Stores </Text>
            </View>

            <View style={{alignItems: 'center'}}>
                <TextInput placeholder='Email/Username'
                style={{width: 150, height: 30, borderRadius: 8, borderWidth: 0.5, fontSize: 10,
                    padding: 5, marginBottom: 15, textAlign: 'auto'}}/>
                <TextInput placeholder='Password' secureTextEntry={true}
                style={{width:150, height: 30, borderRadius: 8, borderWidth: 0.5, fontSize: 12,
                    padding: 5, marginBottom: 20, textAlign: 'auto'}}/>
                <Button 
                onPress={() => navigation.navigate('home')}
                title='Login'
                />
            </View>

            <View style={{alignItems: 'center', padding: 6, marginTop: 15}}>
                <Text style={{padding: 6}}> No account yet? </Text>
                <TouchableHighlight onPress={() => alert('In Progress')} underlayColor='#d6d4ce'>
                    <Text> Register Here </Text>
                </TouchableHighlight>
            </View>
        </View>
        
    );
}