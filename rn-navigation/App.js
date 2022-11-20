import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonicIcons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const TabBar = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        {/* 
        
          Bottom TabBar Code

        */}

        <TabBar.Navigator 
          initialRouteName='welcome-screens'
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;

              console.log(route);
  
              if (rn === 'welcome-screen') {
                iconName = focused ? 'home' : 'home-outline';
  
              } else if (rn === 'login-screen') {
                iconName = focused ? 'list' : 'list-outline';
  
              }
  
              // You can return any component that you like here!
              return <IonicIcons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <TabBar.Screen name='welcome-screen' options={{ tabBarShowLabel: false, headerTitle: 'Welcome Screen' }} component={WelcomeScreen} />
          <TabBar.Screen name='login-screen' options={{ tabBarShowLabel: false, headerTitle: 'Login Screen' }} component={LoginScreen} />
        </TabBar.Navigator>

        {/* 
          
          Drawer Code 

        */}

        {/* <Drawer.Navigator initialRouteName="welcome-screen">
          <Drawer.Screen name="welcome-screen" options={{ headerTitle: 'Welcome Screen', drawerLabel: 'Welcome' }} component={WelcomeScreen} />
          <Drawer.Screen name="login-screen" options={{ headerTitle: 'Login Screen', drawerLabel: 'Login' }} component={LoginScreen} />
        </Drawer.Navigator> */}
      </NavigationContainer>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
