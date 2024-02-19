import React from "react";
import {  StyleSheet, Image, View, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

//IMAGES
import Home from '../assets/Images/Home.png'



const Nav = () => {

    //VARIABLES
    const navigation = useNavigation();

    return (
        <View style={styles.nav}>
                <TouchableOpacity style={styles.ButtonCard} onPress={() => navigation.navigate('Home')}>
                <Image source={Home} style={styles.icon} />
                </TouchableOpacity>
        </View>
    );
};

{/*STYLES*/}
const styles = StyleSheet.create({
    nav: {
        position: 'fixed',
        flexDirection: 'row',
        justifyContent: 'space-around', 
        backgroundColor: "rgba(207, 239, 255, 0.05)",
        bottom: 0,
        height: '8.5%',
        width: '100%',
        alignItems: 'center',
    },

    icon: {
        width: 80,
        height: 70,
    },

    ButtonCard:{
        top: '-5%',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 7,
        width: '95%',
        alignItems: 'center',
        backgroundColor: 'white',
    }
});

export default Nav;