import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { useFonts, Poppins_400Regular, Poppins_900Black } from '@expo-google-fonts/poppins';
import { useNavigation } from '@react-navigation/native';

import Nav from '../Components/Nav'

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
                <Text style={styles.headertitle}>Japanese</Text>
            </View>

                <View style={styles.BodyContainer}>

                    {/*Japanese*/}
                    <Text style={styles.LanguageTitle}>Japanese</Text>

                    <View style={styles.Card}>
                    <Text style={styles.CardText}> Kon'nichiwa </Text>
                    <Text style={styles.CardText2}> こんにちは </Text>
                    </View>

                    {/* Line */}
                    <View style={styles.line} />

                    {/*English*/}
                    <Text style={styles.LanguageTitle}>English</Text>

                    <View style={styles.Card}>
                    <Text style={styles.CardText}> Hello </Text>
                    </View>

                </View>


                {/* Buttons */}
                <View style={styles.Buttonview}>

                    <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.buttontext}>Back</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Ohayo')}>
                        <Text style={styles.buttontext}>Next</Text>
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
        width: '85%',
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 12,
        shadowOffset: {
            width: 0,
            height: 5, 
        },
        elevation: 5, 
        marginTop: '5%',
        alignSelf: 'center',
        borderRadius: 15,
        justifyContent: 'center',
    },
    

    CardText: {
        fontSize: 40,
        fontFamily: 'Poppins_400Regular',
        marginLeft: 15,
    },

    CardText2: {
        fontSize: 30,
        fontFamily: 'Poppins_400Regular',
        marginLeft: 15,
    },

    LanguageTitle:{
        fontSize: 18,
        fontFamily: 'Poppins_400Regular',
        marginLeft: '5%',
        marginTop: '3%',
    },

    line: {
        height: 1,
        backgroundColor: '#C5C5C5',
        alignSelf: 'center',
        marginTop: 40,
        marginBottom: 10,
        width: '85%',
    },
    
    Buttonview: {
        flexDirection: 'row',
        top: '-12%',
        left: '2%',
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
    },

    Button: {
        backgroundColor: "#FF6666",
        borderRadius: 20,
        height: 45,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '7%',
    },

    buttontext: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Poppins_400Regular',
    },

})