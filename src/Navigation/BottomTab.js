import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../Screen/Home";
import Menu from "../Screen/Menu";
import AddtoCard from "../Screen/AddtoCard";
import FavouriteScreen from "../Screen/Favourite";
import SearchScreen from "../Screen/Search";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Icon from 'react-native-vector-icons/Foundation';
import Shoping from 'react-native-vector-icons/AntDesign';
import Search from 'react-native-vector-icons/Feather';
import { Image, StyleSheet, Vibration } from "react-native";
import TrendingDeals from "../Screen/Treanding";
import CompleteScreen from "../Screen/Completescreen";
import CheckoutScreen from "../Screen/Checkout";
import { View } from "react-native";


const Tab=createBottomTabNavigator()
const BottomTab=()=>{
    return(
    <Tab.Navigator 
    initialRouteName="Home"
    screenOptions={{
        headerShown:false,
        tabBarStyle:{
            backgroundColor:'#05A845',
            height:63,
            borderTopLeftRadius:25,
            borderTopRightRadius:25,
            borderBottomLeftRadius:20,
            borderTopColor: 'transparent',
            borderBottomLeftRadius:30
        },
        tabBarLabel: () => null,
        tabBarHideOnKeyboard: true,
    }}
    tabBarOptions={{
        keyboardHidesTabBar: true
     }} 

    
    >
        <Tab.Screen name="Home"
         component={Home}
         options={{
            tabBarIcon: ({ focused, color, size }) => {
                return <Icon name='home' size={35} color={focused?'#FBBC05':'#FFFFFF'}/>
            },
            
        }}
          />
     
        <Tab.Screen 
        name="Menu" 
        component={Menu} 
        options={{
            tabBarIcon: ({ focused, color, size }) => {
    
                return <Image
                source={require('.../../../assets/Menu.png')}
                style={{
                    height: 30, 
                    width: 30,

                }}
                />
            },
            
        }}

        />
        <Tab.Screen name="AddtoCard" 
        component={AddtoCard}
        options={{
            tabBarIcon: ({ focused, color, size }) => {
                return (
                <>
                <View style={styles.circleContainer}>
                <Shoping name='shoppingcart' size={30} color={focused?'#FBBC05':'#05A845'}/>
                </View>
                </>)
            },
            
        }}
        />
        <Tab.Screen name="FavouriteScreen"
         component={FavouriteScreen}
         options={{
            tabBarIcon: ({ focused, color, size }) => {
                return <Shoping name='hearto' size={36} color={focused?'#FBBC05':'#FFFFFF'}/>
            },
            
        }}
         />
        <Tab.Screen name="SearchScreen"
         component={SearchScreen}
         options={{
            tabBarIcon: ({ focused, color, size }) => {
                return <Search name='search' size={40} color={focused?'#FBBC05':'#FFFFFF'}/>
            },
            
        }}
         />

        
    </Tab.Navigator>
    )


}

export default BottomTab;

const styles=StyleSheet.create({
    circleContainer: {
        width: 52,
        height: 52,
        backgroundColor: '#FFFFFF',
        borderRadius: 26, 
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.1, 
        shadowRadius: 4, 
      },
})
