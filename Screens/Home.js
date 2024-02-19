import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { useFonts, Poppins_400Regular, Poppins_900Black } from '@expo-google-fonts/poppins';
import { useNavigation } from '@react-navigation/native';

import Nav from '../Components/Nav'


//IMAGES
import Japan from '../assets/Images/Japan.png'
import Spain from '../assets/Images/Spain.png'
import Germany from '../assets/Images/Germany.png'

export default function Home() {    

    //VARIABLES
    const navigation = useNavigation();

    //FONTS
    let [fontsLoaded, fontError] = useFonts({
        Poppins_400Regular, Poppins_900Black,
      });
    
      if (!fontsLoaded && !fontError) {
        return null;
      }  

    return(
    <SafeAreaView style={styles.MainContainer}>
        <View style={styles.Content}>
            <View style={styles.HeaderContainer}>
                <Text style={styles.headertitle}>Learning Basic Languages</Text>
            </View>

                <View style={styles.BodyContainer}>

                    {/*Japanese*/}
                    <TouchableOpacity style={styles.Card} onPress={() => navigation.navigate('Konnichiwa')}>
                    <Image source={Japan} style={styles.icon} /> 
                    <Text style={styles.CardText}> Japanese </Text>
                    </TouchableOpacity>

                    {/*Spanish*/}
                    <TouchableOpacity style={styles.Card} onPress={() => navigation.navigate('Hola')}>
                    <Image source={Spain} style={styles.icon} /> 
                    <Text style={styles.CardText}> Spanish </Text>
                    </TouchableOpacity>

                    {/*German*/}
                    <TouchableOpacity style={styles.Card} onPress={() => navigation.navigate('Hallo')}>
                    <Image source={Germany} style={styles.icon}/> 
                    <Text style={styles.CardText}> German </Text>
                    </TouchableOpacity>

                </View>

        </View>

        <Nav/>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    MainContainer:{
        flex: 1,
        backgroundColor: "rgba(207, 239, 255, 0.05)",
    },

    Content:{
        height: '91.5%',
    },

    BodyContainer:{
        flex: 1,
        alignItems: 'center',
        top: '-4%',
    },

    HeaderContainer: {
        backgroundColor: "#FF6666",
        height: '25%',
        top: '-10%',
        borderRadius: 40,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },

    headertitle:{
        marginTop: 50,
        fontSize: 23,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Poppins_400Regular',
    },

    Card: {
        alignItems: 'center',
        height: '25%',
        width: '95%',
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 12,
        shadowOffset: {
            width: 0,
            height: 5, 
        },
        elevation: 5, 
        flexDirection: 'row',
        marginTop: '5%',
    },
    

    CardText: {
        fontSize: 35,
        fontFamily: 'Poppins_400Regular',
        marginLeft: 15,
        letterSpacing: 4,
    },

    icon:{
        height: 91,
        width: 91,
        marginLeft: 20,
    },


})