import * as React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, Image, TouchableHighlightBase} from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';
import * as firebase from 'firebase';
import db from '../config.js';

export default class WriteStoryScreen extends React.Component{
    render(){
        return(
            <View>
                <TextInput>

                </TextInput>
                <TextInput>
                    
                </TextInput>
                <TextInput>
                    
                </TextInput>
                <TouchableOpacity>
                    <Text>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}