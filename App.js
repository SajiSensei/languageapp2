import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//SCREENS
import Home from './Screens/Home'
import Konnichiwa from './JapaneseScreen/Konnichiwa'
import Hola from './SpanishScreen/Hola'
import Hallo from './GermanScreen/Hallo'
import Ohayo from './JapaneseScreen/Ohayo'
import BuenDia from './SpanishScreen/BuenDia'
import GutenMorgen from './GermanScreen/GutenMorgen'

//VARIABLES
const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home">
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        {/* JAPANESE */}
        <Stack.Screen name="Konnichiwa" component={Konnichiwa} options={{headerShown: false}} />
        <Stack.Screen name="Ohayo" component={Ohayo} options={{headerShown: false}} />

        {/* SPANISH */}
        <Stack.Screen name="Hola" component={Hola} options={{headerShown: false}} />
        <Stack.Screen name="BuenDia" component={BuenDia} options={{headerShown: false}} />

        {/* GERMAN */}
        <Stack.Screen name="Hallo" component={Hallo} options={{headerShown: false}} />
        <Stack.Screen name="GutenMorgen" component={GutenMorgen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
