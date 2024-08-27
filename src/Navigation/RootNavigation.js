import React from "react"
import {View,Text} from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../Screen/LoginScreen";
import BottomTab from "./BottomTab";
import AddtoCard from "../Screen/AddtoCard";
import CompleteScreen from "../Screen/Completescreen";
import CheckoutScreen from "../Screen/Checkout";
import TrendingDeals from "../Screen/Treanding";
import SignUpScreen from "../Screen/Signupscreen";

const Stack=createNativeStackNavigator()

const RootNavigation=()=>{
    console.log('------->',Stack)
    return(
       <Stack.Navigator initialRouteName="Login" screenOptions={{
        headerShown:false
       }}>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Bottom" component={BottomTab}/>
        <Stack.Screen name="AddtoCard" component={AddtoCard}/>
        <Stack.Screen name="Complete" component={CompleteScreen}/>
        <Stack.Screen name="CheckoutScreen" component={CheckoutScreen}/>
        <Stack.Screen name="TrendingDeals" component={TrendingDeals}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
          
       </Stack.Navigator>
    )
}
export default RootNavigation;