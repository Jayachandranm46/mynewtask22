import { View,Image, Text, StyleSheet,TouchableOpacity } from "react-native"
import React from "react"
const CompleteScreen=({navigation})=>{
    return(
        <View
        style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#FFFFFF',
            flex:1

        }}
        >
            <View>
            <Image 
                    source={require('.../../../assets/two.png')}
                    
                    style={{
                        color:'red',
                        width:62,
                        height:62,
                        marginTop:20
                        
                    }}
                    />
            </View>

            <View>
                <Text>Thankyou !</Text>
            </View>

            <View>
            <Image 
                    source={require('.../../../assets/Right.png')}
                    
                    style={{
                        color:'red',
                        width:160,
                        height:160,
                        marginTop:20
                        
                    }}
                    />
            </View>
            <View>
                <Text>Order Placed Successfully !!!</Text>
            </View>

            <View>
            <Image 
                    source={require('.../../../assets/Json.png')}
                    
                    style={{
                        color:'red',
                        width:200,
                        height:200,
                        marginTop:20
                        
                    }}
                    />
            </View>

            <View style={{
                        justifyContent:'center',
                        alignItems:'center',
                        marginTop:70
                    }}>
                             <TouchableOpacity style={[style.loginbtn,{backgroundColor:'#05A845'}]}
                onPress={()=>navigation.navigate('Home')}
                >
                  <Text style={[style.logintxt,{color:'#FFFFFF'}]}>Back to home</Text>
                </TouchableOpacity>
                </View>


        </View>
    )

}

export default CompleteScreen;

const style=StyleSheet.create({
    loginbtn:{
        width:343,
        height:43,
        borderWidth:1,
        marginTop:9,
        borderRadius:16,
        backgroundColor:'#FFFFFF',
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#05A845'
    },
    logintxt:{
        fontSize:16,
        color:'#05A845',
        marginLeft:20

    },
})