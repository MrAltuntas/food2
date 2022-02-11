import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SearchScreen from './src/screens/SearchScreen'
import ResultsShowScreen from './src/screens/ResultsShowScreen'
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen options={{ title: 'BusinessSearch' }} name="Search" component={SearchScreen} />
        <Stack.Screen options={{ title: 'Details' }} name="Detail" component={ResultsShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;