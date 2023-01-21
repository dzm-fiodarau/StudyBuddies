//import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  TextInput,
  Dimensions,
} from "react-native";
import {
  NavigationContainer
} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Pages/Login";
import RegisterPage from "./Pages/Register";
import Icon from "react-native-vector-icons/Entypo";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Signup from "./Pages/Register";
import Home from "./Pages/HomePage";
import Messages from "./Pages/Messages";
import Inbox from "./Pages/Inbox";
import UserProfile from "./Pages/UserProfile";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';



//constant Stack is use to set up the navigation between the different screen required in the application
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
 //const Drawer = createDrawerNavigator(); 
 

// this function return the logo and the app name in the login screen
function LogoTitle() {
  return (
    <View style={styles.logoTitle}>
      <Icon name="log-out" size={50} color="black" />
      <Text style={{ fontSize: 30 }}> LinkedOut</Text>
    </View>
  );
}

//get message count from database
const messagesCount = 13

/*
 ***** in the section below register all pages as const*******************************************
 ***** each subsequent const will return the specific page as a jsx element that is given to the component parameter of each stack.screen ie (component = {LoginScreen)************
 */

// return the Login page
//param: navigation props used to navigate between Login page and register page
const LoginScreen = ({ navigation }: { navigation: any }) => {
  return <Login navigation={navigation}></Login>;
};

// return the Register page (not yet implemented)
//param: none
const RegisterScreen = () => {
  return <Signup></Signup>;
};

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return <Home navigation={navigation}></Home>;
};


function BottomNav(){
  return(
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color}) => {
        let iconName;

        if (route.name === 'HomeScreen') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Messages') {
          iconName = focused ? 'chatbox' : 'chatbox-outline';
        } else if (route.name === 'Inbox') {
          iconName = focused ? 'folder' : 'folder-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person-outline';
        }

        // You can return any component that you like here!
        return <Ionicons size={30} name={iconName} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: {
        backgroundColor: "red",
    }
    })}>
      
        <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Home' }}/>
        <Tab.Screen name="Messages" component={Messages} options={{ title: 'Messages', tabBarBadge: messagesCount }}/>
        <Tab.Screen name="Inbox" component={Inbox} options={{ title: 'Inbox' }}/>
        <Tab.Screen name="Profile" component={UserProfile} options={{ title: 'My Profile' }}/>
      </Tab.Navigator>
  )
}
////return the whole app as a single jsx element, in here just add each page to its repective screen
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerStyle: { backgroundColor: "#967BB6" }, }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerTitle: (props: any) => <LogoTitle {...props} /> }}
        />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={BottomNav} options={{ title: 'Sign Out' }}/>       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// styles for the app.tsx element
//add css-like styles here
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logoTitle: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
});
