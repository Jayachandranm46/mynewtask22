import React, { useState } from "react";
import { View,StyleSheet, Pressable,Text,Image } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'

const CustomHeader=({navigation,title,headerstyle,notication,noticationname})=>{
    
    return(
    <View style={[style.header,headerstyle]}>
    <View style={style.leftContainer}>
      
            <Pressable onPress={() => navigation.goBack()}>
            
                <Icon name='arrowleft'color={'#000'} size={24} />
        </Pressable>
        <Text style={style.title}>{title}</Text> 
        {
            notication?(
                <Image
                source={require('.../../../assets/Notification.png')}
                style={{
                    width:28,
                    height:28,
                    marginRight:20
                }}
                />
            ):(
                <Text>{null}</Text>
            )
        } 
            
    </View>

    
</View>
    )

}

export default CustomHeader;


const style = StyleSheet.create({
    leftContainer: {
        display:'flex',
        flexDirection: 'row',
       justifyContent:'space-between'
        
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20,
        color:'#000'
    },
    placeholder: {
        width: 24, 
    },
    header: {
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'space-between',
        paddingHorizontal: 20,
        backgroundColor:'#FFFFFF',
        width:'100%',
        height:50,
        marginTop:10
      }
});